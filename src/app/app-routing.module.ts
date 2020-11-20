import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HackingComponent } from './pages/actions/hacking/hacking.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hacking',
    component: HackingComponent
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
