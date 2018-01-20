import {Component, Input} from '@angular/core';
import {GoogleSummaryFlat} from '../../../gapi/interfaces';

const getCode = (profile: GoogleSummaryFlat) => `
<script>
function clicklyGetPageType() {
  if (window.location.pathname === '/') {
    return 'home';
  } else {
    return 'other';
  }
}
const s = document.createElement('script');
s.src = 'https://clickly.marchenko.net.ua/clickly.client.js?v=' + Date.now();
s.setAttribute('data-clickly-tid', '${profile.propertyId}');
s.async = true;
(document.head || document.documentElement).appendChild(s);
</script>
`;

@Component({
  selector: 'app-setup-instructions',
  templateUrl: './setup-instructions.component.html',
  styleUrls: ['./setup-instructions.component.css']
})
export class SetupInstructionsComponent {
  @Input() public profile: GoogleSummaryFlat;

  public getCode() {
    return getCode(this.profile);
  }
}
