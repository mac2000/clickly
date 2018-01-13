import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ReportRow} from '../dashboard.component';
import {AggregatedData, AggregatedEvent, countEvents} from '../utils';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnChanges {
  @Input() public data: ReportRow[];
  @Output() public highlight: EventEmitter<AggregatedEvent> = new EventEmitter<AggregatedEvent>();
  @Output() public emulate: EventEmitter<AggregatedEvent> = new EventEmitter<AggregatedEvent>();

  public processed: AggregatedData;

  public ngOnChanges() {
    const events = <ReportRow[]>this.data
      .filter(i => i && i.eventAction === 'view')
      .map(c => this.data
        .filter(i => c.clientId === i.clientId && c.timestamp < i.timestamp && i.eventAction !== 'view')
        .sort((a, b) => a.timestamp - b.timestamp)
        .shift()
      )
      .filter(e => !!e);

    this.processed = countEvents(events);
  }

  public onHighlight(event: AggregatedEvent) {
    this.highlight.emit(event);
  }

  public onEmulate(event: AggregatedEvent) {
    this.emulate.emit(event);
  }
}



