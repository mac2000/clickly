import {Component} from '@angular/core';
import {AuthService} from '../../../gapi/auth.service';
import {User} from '../../../gapi/interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  public user: User;

  public constructor(public authService: AuthService) {
    authService.user.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }
}
