import {ApplicationRef, ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, mergeMap, switchMap, take} from 'rxjs/operators';
import {GoogleSummaryFlat} from '../../../gapi/interfaces';
import {ManagementService} from '../../../gapi/management.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import {and, dimension, GaService} from '../../../gapi/ga/ga.service';
import {Observable} from 'rxjs/Observable';
import {AggregatedEvent} from './utils';
import {HttpClient} from "@angular/common/http";

const defaultStartDate = new Date(new Date().setDate(new Date().getDate() - 2));
const defaultEndDate = new Date(new Date().setDate(new Date().getDate() - 1));

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public loading = false;
  public navigated: NavigatedMessage;
  public showSetup = false;
  public url: SafeUrl;
  public profile: GoogleSummaryFlat;
  public zoom = new FormControl(localStorage.getItem('zoom') || '0.8');
  public capture = new FormControl(false);
  public startDate = new FormControl(defaultStartDate);
  public endDate = new FormControl(defaultEndDate);
  public data: ReportRow[] | null;
  public click: ClicklyMessage | null;

  public top: any[] = [];
  public topClick: any[] = [];

  @ViewChild('frame') public frame: ElementRef;

  public constructor(private activatedRoute: ActivatedRoute,
                     private managementService: ManagementService,
                     private gaService: GaService,
                     private router: Router,
                     private zone: NgZone,
                     private http: HttpClient,
                     private changeDetectorRef: ChangeDetectorRef,
                     private applicationRef: ApplicationRef,
                     private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');

    activatedRoute.paramMap.pipe(
      switchMap(params => {
        const accountId = params.get('accountId') || '';
        const propertyId = params.get('propertyId') || '';
        const profileId = params.get('profileId') || '';
        return this.managementService.getWebSites().pipe(
          mergeMap(items => items),
          filter((item: GoogleSummaryFlat) => {
            return item.accountId === accountId && item.propertyId === propertyId && item.profileId === profileId;
          }),
          take(1)
        );
      })
    ).subscribe(profile => {
      if (!profile) {
        return this.router.navigateByUrl('/profiles');
      }
      this.profile = profile;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.profile.websiteUrl);
    });

    this.zoom.valueChanges.subscribe(value => {
      localStorage.setItem('zoom', value);
      this.postMessage('zoom', {value});
    });

    this.capture.valueChanges.subscribe(value => {
      this.postMessage(value ? 'capture' : 'release');
    });

    this.startDate.valueChanges.subscribe(() => {
      if (this.navigated) {
        this.onNavigated(this.navigated);
      }
    });

    this.endDate.valueChanges.subscribe(() => {
      if (this.navigated) {
        this.onNavigated(this.navigated);
      }
    });
  }

  public ngOnInit() {
    setTimeout(() => {
      if (!this.navigated) {
        this.showSetup = true;
      }
    }, 5000);
  }

  public onTopClick(selector: string) {
    this.postMessage('highlight', {selector});
  }

  public onTopEmulate(selector: string) {
    this.postMessage('emulate', {selector});
  }

  public onHighlight(event: AggregatedEvent) {
    this.postMessage('highlight', {selector: event.name});
  }

  public onEmulate(event: AggregatedEvent) {
    this.postMessage('emulate', {selector: event.name});
  }

  @HostListener('window:message', ['$event'])
  private onMessage(event: MessageEvent) {
    if (event.data && event.data['clickly']) {
      switch (event.data['action']) {
        case 'navigated':
          return this.onNavigated(<NavigatedMessage>event.data);
        case 'click':
          return this.onClick(<ClickMessage>event.data);
        default:
          return console.warn('unknown', event.data);
      }
    }
  }

  private onNavigated(data: NavigatedMessage) {
    this.navigated = data;
    this.click = null;
    this.data = null;
    this.loading = true;
    this.showSetup = false;
    this.postMessage('zoom', {value: this.zoom.value});
    this.getData(data).subscribe(rows => {
      this.data = rows;
      this.loading = false;
    }, error => {
      console.error(error);
      this.loading = false;
    });
    this.http.get('https://clicklyapi.marchenko.net.ua/api', {
      params: {
        id: this.profile.profileId,
        url: data.ec,
        start_date: (this.startDate.value || defaultStartDate).toISOString().split('T').shift() || '',
        end_date: (this.endDate.value || defaultEndDate).toISOString().split('T').shift() || ''
      }
    }).subscribe((res: any[]) => {
      console.log(res);
      this.top = res;
    });
  }

  private getData(data: NavigatedMessage): Observable<ReportRow[]> {
    return this.gaService
      .get({
        startDate: this.startDate.value || defaultStartDate,
        endDate: this.endDate.value || defaultEndDate,
        id: this.profile.profileId,
        metrics: ['totalEvents'],
        dimensions: ['eventCategory', 'eventAction', 'eventLabel', 'dimension1', 'dimension2'],
        filters: and(
          dimension('dimension4').exactMatch(data.cd4),
          dimension('deviceCategory').exactMatch('desktop'),
          dimension('eventCategory').exactMatch(data.ec) // EXPERIMENT: only for this page
        )
      })
      .pipe(
        map((rows: string[][]): ReportRow[] => rows.map((row: string[]): ReportRow => ({
          eventCategory: row[0],
          eventAction: row[1],
          eventLabel: row[2],
          clientId: parseInt(row[3], 10),
          timestamp: parseInt(row[4], 10)
        })).filter(row => !isNaN(row.clientId) && !isNaN(row.timestamp))),
        map(rows => rows.sort((a, b) => a.timestamp - b.timestamp))
      );
  }

  private onClick(click: ClickMessage) {
    console.log('CLICK', click);
    this.click = click;
    this.topClick = this.top.filter(r => r[0].indexOf(click.ea) !== -1);
  }



  private postMessage(action: string, payload: any = {}) {
    this.frame.nativeElement.contentWindow.postMessage({
      ...payload,
      action,
      clickly: true
    }, '*');
  }
}

export interface ClicklyMessage {
  clickly: boolean;
  action: string;
}

export interface NavigatedMessage extends ClicklyMessage {
  ec: string;
  el: string;
  cd4: string;
}

export interface ClickMessage extends NavigatedMessage {
  ea: string;
}

export interface ReportRow {
  eventCategory: string;
  eventAction: string;
  eventLabel: string;
  clientId: number;
  timestamp: number;
}
