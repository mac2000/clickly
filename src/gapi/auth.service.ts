import {Inject, Injectable} from '@angular/core';
import {GoogleApi, GoogleUser, User} from './interfaces';
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {map, startWith} from 'rxjs/operators';

const mapCurrentUser = (currentUser: GoogleUser): User | null => {
  const basicProfile = currentUser ? currentUser.getBasicProfile() : null;
  return basicProfile ? {
    id: basicProfile.getId(),
    email: basicProfile.getEmail(),
    name: basicProfile.getName(),
    image: basicProfile.getImageUrl()
  } : null;
};

@Injectable()
export class AuthService {
  public isSignedIn: Observable<boolean>;
  public user: Observable<User | null>;
  private readonly isSignedInEventName = 'app.gapi.auth2.isSignedIn';

  public constructor(@Inject('gapi') private gapi: GoogleApi) {
    this.gapi.auth2.getAuthInstance().isSignedIn.listen(isSignedIn => {
      window.dispatchEvent(new CustomEvent(this.isSignedInEventName, {detail: isSignedIn}));
    });

    this.isSignedIn = fromEvent(window, this.isSignedInEventName)
      .pipe(
        map((event: { detail: boolean }) => event.detail),
        startWith(this.gapi.auth2.getAuthInstance().isSignedIn.get())
      );

    this.user = this.isSignedIn.pipe(
      map(isSignedIn => isSignedIn
        ? mapCurrentUser(this.gapi.auth2.getAuthInstance().currentUser.get())
        : null)
    );
  }

  public login() {
    this.gapi.auth2.getAuthInstance().signIn();
  }

  public logout() {
    this.gapi.auth2.getAuthInstance().signOut();
  }

  public revoke() {
    this.gapi.auth2.getAuthInstance().disconnect();
  }
}

