import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {Configuration, GoogleApi} from './interfaces';
import {ManagementService} from './management.service';
import {GaService} from './ga/ga.service';
import {RtService} from './rt/rt.service';
import {HttpClientModule} from '@angular/common/http';
import {PageSpeedService} from './page-speed.service';

declare let gapi: GoogleApi;

const defaultScopes = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

const mapConfiguration = (configuration: Configuration) => ({
  clientId: configuration.clientId,
  scope: (configuration.scope || defaultScopes).join(' ')
});

const onAppInitialize = (configuration: Configuration) => () => new Promise(resolve => {
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/api.js';
  script.onload = () => gapi
    .load('client:analytics', () => gapi.client
      .init(mapConfiguration(configuration))
      .then(resolve));
  document.body.appendChild(script);
});

export function getgapi(): GoogleApi {
  return gapi;
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class GapiModule {
  public static forRoot(configuration: Configuration): ModuleWithProviders {
    return {
      ngModule: GapiModule,
      providers: [
        {
          provide: 'configuration',
          useValue: configuration
        },
        {
          provide: APP_INITIALIZER,
          useFactory: onAppInitialize,
          multi: true,
          deps: ['configuration']
        },
        {
          provide: 'gapi',
          useFactory: getgapi
        },
        AuthService,
        ManagementService,
        GaService,
        RtService,
        PageSpeedService
      ]
    };
  }
}
