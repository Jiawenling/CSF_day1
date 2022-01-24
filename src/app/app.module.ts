import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserModule} from './user/user.module'
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule, UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
