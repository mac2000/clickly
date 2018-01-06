import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../gapi/auth.service';
import {ManagementService} from '../../../gapi/management.service';
import {FormControl} from '@angular/forms';
import {GoogleAccount, GoogleProfile, GoogleProperty} from '../../../gapi/interfaces';
import {Router} from '@angular/router';
import {ProfilesService} from '../../profiles.service';
import {PageSpeed} from '../../../gapi/page-speed.service';
import {PreviewsService} from '../../previews.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  public accounts: GoogleAccount[] = [];
  public properties: GoogleProperty[] = [];
  public profiles: GoogleProfile[];
  public speed: PageSpeed;

  public account = new FormControl();
  public property = new FormControl();
  public profile = new FormControl();

  public constructor(public authService: AuthService,
                     public managementService: ManagementService,
                     public profilesService: ProfilesService,
                     public previewsService: PreviewsService,
                     private router: Router) {
  }

  public ngOnInit() {
    this.managementService.getAccounts().subscribe(accounts => this.accounts = accounts || []);

    this.account.valueChanges.subscribe(account => {
      this.property.setValue(null);
      this.profile.setValue(null);
      this.managementService.getProperties(account).subscribe(properties => this.properties = properties || []);
    });

    this.property.valueChanges.subscribe(property => {
      this.profile.setValue(null);
      this.managementService.getProfiles(property).subscribe(profiles => this.profiles = profiles || []);
    });

    this.profile.valueChanges.subscribe((profile: GoogleProfile) => {
      if (!profile) {
        return;
      }
      this.previewsService.get(profile.websiteUrl).subscribe(response => {
        this.speed = response;
      });
    });
  }

  public add() {
    if (!this.profile.value) {
      return;
    }

    // this.profilesService.add(this.profile.value);
    this.router.navigate(['dashboard', this.profile.value.id]).then();
  }
}
