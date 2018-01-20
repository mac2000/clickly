import {ApplicationRef, ChangeDetectorRef, Injectable, NgZone} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ManagementService} from '../gapi/management.service';
import {DomSanitizer} from '@angular/platform-browser';
import {GaService} from '../gapi/ga/ga.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReportRow} from './pages/dashboard/dashboard.component';

@Injectable()
export class DataService {
  private _data = new BehaviorSubject<ReportRow[]>([]);
  public data = this._data.asObservable();

  public constructor(private activatedRoute: ActivatedRoute,
                     private managementService: ManagementService,
                     private gaService: GaService,
                     private router: Router,
                     private zone: NgZone,
                     private changeDetectorRef: ChangeDetectorRef,
                     private applicationRef: ApplicationRef,
                     private sanitizer: DomSanitizer) {
  }

  public loadData(dimension4: string, startDate: Date, endDate: Date): void {
    // this.gaService
    //   .get({
    //     startDate: startDate,
    //     endDate: endDate,
    //     id: this.profile.profileId,
    //     metrics: ['totalEvents'],
    //     dimensions: ['eventCategory', 'eventAction', 'eventLabel', 'dimension1', 'dimension2'],
    //     filters: and(
    //       dimension('dimension4').exactMatch(data.cd4),
    //       dimension('deviceCategory').exactMatch('desktop')
    //     )
    //   })
    //   .pipe(
    //     map((rows: string[][]): ReportRow[] => rows.map((row: string[]): ReportRow => ({
    //       eventCategory: row[0],
    //       eventAction: row[1],
    //       eventLabel: row[2],
    //       clientId: parseInt(row[3], 10),
    //       timestamp: parseInt(row[4], 10)
    //     })).filter(row => !isNaN(row.clientId) && !isNaN(row.timestamp))),
    //     map(rows => rows.sort((a, b) => a.timestamp - b.timestamp))
    //   )
    //   .subscribe(data => this._data.next(data));
  }

}
