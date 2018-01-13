import {Component, Input} from '@angular/core';
import {NavigatedMessage, ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() public data: NavigatedMessage;
  @Input() public events: ReportRow[];

  public get dimension4(): string {
    return this.data ? this.data.cd4 || '' : '';
  }

  public get url(): string {
    return this.data ? this.data.ec || '' : '';
  }

  public get title(): string {
    return this.data ? this.data.el || '' : '';
  }

  public get users(): number {
    return Array.from(new Set(this.events.map(item => item.clientId))).length;
  }

  public get views(): number {
    return this.events.filter(item => item.eventAction === 'view').length;
  }

  public get clicks(): number {
    return this.events.filter(item => item.eventAction !== 'view').length;
  }

  public get exits(): number {
    const first = this.events
      .filter(i => i.eventAction === 'view')
      .map(c => this.events
        .filter(i => c.clientId === i.clientId && c.timestamp < i.timestamp)
        .sort((a, b) => a.timestamp - b.timestamp)
        .shift()
      );

    const firstClicksAfterView = first.filter(c => !!c).length;
    const exits = first.length - firstClicksAfterView;
    return exits;
  }
}
