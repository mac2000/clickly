import {Component, Input} from '@angular/core';
import {NavigatedMessage} from '../dashboard.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() public data: NavigatedMessage;

  public get dimension4(): string {
    return this.data ? this.data.cd4 || '' : '';
  }

  public get url(): string {
    return this.data ? this.data.ec || '' : '';
  }

  public get title(): string {
    return this.data ? this.data.el || '' : '';
  }
}
