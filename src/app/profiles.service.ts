import {Injectable} from '@angular/core';

@Injectable()
export class ProfilesService {
  // private id: string;
  // constructor(private authService: AuthService) {
  //   authService.user.subscribe(user => {
  //     if (user) {
  //       this.id = user.id;
  //       const profiles = JSON.parse(localStorage.getItem(this.key) || '[]');
  //       this._profiles.next(profiles);
  //     }
  //   });
  // }
  //
  // private _profiles = new BehaviorSubject<GoogleProfile[]>([]);
  // public profiles = this._profiles.asObservable();
  //
  // private get key(): string {
  //   return `profiles:${this.id}`;
  // }
  //
  // private flush(profiles: GoogleProfile[]) {
  //   localStorage.setItem(this.key, JSON.stringify(profiles));
  //   this._profiles.next(profiles);
  // }
  //
  // public add(profile: GoogleProfile) {
  //   if (this._profiles.value.find(item => item.id === profile.id)) {
  //     return;
  //   }
  //   this.flush(this._profiles.value.concat([profile]));
  // }
  //
  // public remove(profile: GoogleProfile) {
  //   this.flush(this._profiles.value.filter(saved => saved.id !== profile.id));
  // }
  //
  // public get(id: string): Observable<GoogleProfile> {
  //   return this.profiles.pipe(
  //     mergeAll(),
  //     filter(profile => profile.id === id),
  //     take(1)
  //   );
  // }
}
