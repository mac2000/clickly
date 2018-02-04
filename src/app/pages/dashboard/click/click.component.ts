import {Component, Input, OnChanges} from '@angular/core';
import {ClickMessage, ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnChanges {
  @Input() public data: ReportRow[];
  @Input() public click: ClickMessage;

  public users = 0;
  public clicks = 0;

  public ngOnChanges() {
    const data = this.data
      .filter(item => this.click.ea.indexOf(item.eventAction) === 0);

    this.users = Array.from(new Set(data.map(d => d.clientId))).length;
    this.clicks = data.filter(item => item.eventAction !== 'view').length;
  }
}
