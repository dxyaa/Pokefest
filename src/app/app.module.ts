import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NewcompComponent } from './newcomp/newcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    NewcompComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
