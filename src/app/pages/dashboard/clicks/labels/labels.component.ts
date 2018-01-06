import {Component, Input} from '@angular/core';
import {Aggregated} from '../../utils';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent {
  @Input() public labels: Aggregated[];
  @Input() public showPercents = false;
  @Input() public top10 = true;
  private expanded = false;

  public get count() {
    return this.labels.map(l => l.count).reduce((a, b) => a + b, 0);
  }

  public get users() {
    return this.labels.map(l => l.users).reduce((a, b) => a + b, 0);
  }

  public toggle() {
    this.expanded = !this.expanded;
  }
}
