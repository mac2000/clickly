import {Component, OnInit} from '@angular/core';
// import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../gapi/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(private authService: AuthService, private router: Router/*, private updates: SwUpdate*/, public snackBar: MatSnackBar) {
    // authService.user.subscribe(user => this.router.navigateByUrl(user ? '/profiles' : '/'));
    authService.user.subscribe(user => {
      if (!user) {
        return this.router.navigateByUrl('/');
      }
    });
  }

  public ngOnInit() {
    // this.updates.available.subscribe(() => {
    //   this.notifyAboutAvailableUpdate();
    // });
  }

  // public notifyAboutAvailableUpdate() {
  //   this.snackBar
  //     .open('Update available', 'Update', {
  //       duration: 60000
  //     })
  //     .onAction().subscribe(() => {
  //     document.location.reload();
  //   });
  // }
}
