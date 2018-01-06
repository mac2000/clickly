import {Component} from '@angular/core';
import {AuthService} from '../../../gapi/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public constructor(public authService: AuthService, private router: Router) {
    authService.user.subscribe(user => {
      if (user) {
        return this.router.navigateByUrl('/profiles');
      }
    });
  }
}
