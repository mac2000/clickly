import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SetupComponent} from './pages/setup/setup.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GapiModule} from '../gapi/gapi.module';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {LogoComponent} from './common/logo/logo.component';
import {ProfilesService} from './profiles.service';
import {RowsComponent} from './common/rows/rows.component';
import {PreviewsService} from './previews.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {SelectLoadingComponent} from './common/select-loading/select-loading.component';
import {ProfilesComponent} from './pages/profiles/profiles.component';
import {UserCardComponent} from './common/user-card/user-card.component';
import {HeaderComponent} from './common/header/header.component';
import {SetupInstructionsComponent} from './common/setup-instructions/setup-instructions.component';
import {ProfileCardComponent} from './pages/dashboard/profile-card/profile-card.component';
import {NavigationComponent} from './pages/dashboard/navigation/navigation.component';
import {ClicksComponent} from './pages/dashboard/clicks/clicks.component';
import {FirstComponent} from './pages/dashboard/first/first.component';
import {LabelsComponent} from './pages/dashboard/clicks/labels/labels.component';
import {PrevComponent} from './pages/dashboard/prev/prev.component';
import {NextComponent} from './pages/dashboard/next/next.component';
import {ClickComponent} from './pages/dashboard/click/click.component';
import {LastComponent} from './pages/dashboard/last/last.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent,
    DashboardComponent,
    NotFoundComponent,
    LogoComponent,
    RowsComponent,
    SelectLoadingComponent,
    ProfilesComponent,
    UserCardComponent,
    HeaderComponent,
    SetupInstructionsComponent,
    ProfileCardComponent,
    NavigationComponent,
    ClicksComponent,
    FirstComponent,
    LabelsComponent,
    PrevComponent,
    NextComponent,
    ClickComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    GapiModule.forRoot(environment.gapi)
  ],
  providers: [
    ProfilesService,
    PreviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
