import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SetupComponent} from './pages/setup/setup.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ProfilesComponent} from './pages/profiles/profiles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'profiles',
    component: ProfilesComponent
  },
  {
    path: 'dashboard/:accountId/:propertyId/:profileId',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
