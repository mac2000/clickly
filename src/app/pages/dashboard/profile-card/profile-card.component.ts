import {Component, Input} from '@angular/core';
import {GoogleSummaryFlat} from '../../../../gapi/interfaces';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() public profile: GoogleSummaryFlat;
}
