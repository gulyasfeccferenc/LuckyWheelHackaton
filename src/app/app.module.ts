import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuildingComponent } from './components/building/building.component';
import { HackingComponent } from './pages/actions/hacking/hacking.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    HackingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
