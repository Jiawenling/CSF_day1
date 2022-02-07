import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RegisterComponent } from './register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";
import { Day6Component } from './day6/day6.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './results.component';
import {UserServiceService} from "./user-service.service";


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    RegisterComponent,
    DialogComponent,
    Day6Component,
    ResultsComponent

  ],
  imports: [
    BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule, FlexLayoutModule, MatInputModule, MatDividerModule, MatTooltipModule, HttpClientModule, AppRoutingModule,

  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
