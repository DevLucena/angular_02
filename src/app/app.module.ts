import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IEmailComponent } from './i-email/i-email.component';
import { INumberComponent } from './i-number/i-number.component';
import { IDateComponent } from './i-date/i-date.component';

@NgModule({
  declarations: [
    AppComponent,
    IEmailComponent,
    INumberComponent,
    IDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
