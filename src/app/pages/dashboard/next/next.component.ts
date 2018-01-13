import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {AggregatedData, AggregatedEvent, buildExitEvent, countEvents} from '../utils';
import {ClickMessage, ReportRow} from '../dashboard.component';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnChanges {
  @Input() public data: ReportRow[];
  @Input() public click: ClickMessage;
  @Output() public highlight: EventEmitter<AggregatedEvent> = new EventEmitter<AggregatedEvent>();
  @Output() public emulate: EventEmitter<AggregatedEvent> = new EventEmitter<AggregatedEvent>();

  public processed: AggregatedData;

  public ngOnChanges() {
    const events = <ReportRow[]>this.data
      .filter(item => this.click.ea.indexOf(item.eventAction) === 0)
      .map((event: ReportRow): ReportRow => this.findNext(event));

    this.processed = countEvents(events);
  }

  public onHighlight(event: AggregatedEvent) {
    this.highlight.emit(event);
  }

  public onEmulate(event: AggregatedEvent) {
    this.emulate.emit(event);
  }

  private findNext(event: ReportRow): ReportRow {
    return this.data.filter(item => event.clientId === item.clientId && event.timestamp < item.timestamp)
      .sort((a, b) => a.timestamp - b.timestamp)
      .shift() || buildExitEvent(event);
  }
}
