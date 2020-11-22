import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HackingComponent } from './pages/actions/hacking/hacking.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DownloadComponent} from './pages/actions/download/download.component';
import {CompromisingComponent} from './pages/actions/compromising/compromising.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hacking',
    component: HackingComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'compromising',
    component: CompromisingComponent
  },
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
