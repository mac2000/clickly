import {Component, Input, OnChanges} from '@angular/core';
import {ClickMessage, ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.css']
})
export class PageStatsComponent implements OnChanges {
  @Input() public data: ReportRow[];
  @Input() public click: ClickMessage | null;

  public totalEvents = 0;
  public totalClicks = 0;
  public totalPageViews = 0;
  public firstClicksAfterView = 0;
  public exits = 0;

  public ngOnChanges() {
    const events = this.click
      ? <ReportRow[]>this.data
        .filter(item => this.click && this.click.ea.indexOf(item.eventAction) === 0)
      : this.data;

    this.totalEvents = events.length;
    this.totalClicks = events.filter(item => item.eventAction !== 'view').length;
    this.totalPageViews = events.filter(item => item.eventAction === 'view').length;

    const first = events
      .filter(i => i.eventAction === 'view')
      .map(c => this.data
        .filter(i => c.clientId === i.clientId && c.timestamp < i.timestamp)
        .sort((a, b) => a.timestamp - b.timestamp)
        .shift()
      );

    this.firstClicksAfterView = first.filter(c => !!c).length;
    this.exits = first.length - this.firstClicksAfterView;
  }
}
