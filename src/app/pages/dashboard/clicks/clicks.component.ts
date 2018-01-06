import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AggregatedData, AggregatedEvent} from '../utils';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent {
  @Input() public data: AggregatedData;
  @Input() public title: string;
  @Output() public highlight: EventEmitter<AggregatedEvent> = new EventEmitter<AggregatedEvent>();

  public showPercents = false;
  public showTop10 = true;

  public get events() {
    return this.data.events.length < 10 || !this.showTop10
      ? this.data.events
      : this.data.events.slice(0, 10);
  }

  public doHighlight(item: AggregatedEvent) {
    this.highlight.emit(item);
  }
}
