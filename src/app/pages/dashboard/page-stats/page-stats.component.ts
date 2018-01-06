import {Component, Input, OnChanges} from '@angular/core';
import {ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.css']
})
export class PageStatsComponent implements OnChanges {
  @Input() public data: ReportRow[];

  public totalEvents = 0;
  public totalClicks = 0;
  public totalPageViews = 0;
  public firstClicksAfterView = 0;
  public exits = 0;

  public ngOnChanges() {
    this.totalEvents = this.data.length;
    this.totalClicks = this.data.filter(item => item.eventAction !== 'view').length;
    this.totalPageViews = this.data.filter(item => item.eventAction === 'view').length;

    const first = this.data
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
