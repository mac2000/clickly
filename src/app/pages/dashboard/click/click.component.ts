import {Component, Input} from '@angular/core';
import {ClickMessage} from '../dashboard.component';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent {
  @Input() public click: ClickMessage;
}
