import {Component, Input, OnChanges} from '@angular/core';
import {ClickMessage, ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent implements OnChanges {
  @Input() public data: ReportRow[];
  @Input() public click: ClickMessage | null;

  public uniqueUsersCount = 0;

  public minEvents = 0;
  public maxEvents = 0;
  public avgEvents = 0;

  public minViews = 0;
  public maxViews = 0;
  public avgViews = 0;

  public minClicks = 0;
  public maxClicks = 0;
  public avgClicks = 0;

  public ngOnChanges() {
    const events = this.click
      ? <ReportRow[]>this.data
        .filter(item => this.click && this.click.ea.indexOf(item.eventAction) === 0)
      : this.data;

    const users = Array.from(new Set(events.map(item => item.clientId)));
    this.uniqueUsersCount = users.length;

    const stats = users
      .map(clientId => ({
        clientId,
        events: this.data.filter(item => item.clientId === clientId)
      }))
      .map(user => ({
        total: user.events.length,
        views: user.events.filter(event => event.eventAction === 'view').length,
        clicks: user.events.filter(event => event.eventAction !== 'view').length
      }));

    const totals = stats.map(stat => stat.total);
    const views = stats.map(stat => stat.views);
    const clicks = stats.map(stat => stat.clicks);

    this.minEvents = Math.min.apply(null, totals);
    this.maxEvents = Math.max.apply(null, totals);
    this.avgEvents = (totals.reduce((a, b) => a + b, 0) / totals.length);

    this.minViews = Math.min.apply(null, views);
    this.maxViews = Math.max.apply(null, views);
    this.avgViews = (views.reduce((a, b) => a + b, 0) / views.length);

    this.minClicks = Math.min.apply(null, clicks);
    this.maxClicks = Math.max.apply(null, clicks);
    this.avgClicks = (clicks.reduce((a, b) => a + b, 0) / clicks.length);

  }
}
