import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(readonly _router: Router) {
    // #1438 - fix browser history items when the navigation is canceled
    // https://github.com/angular/angular/issues/13586
    _router.canceledNavigationResolution = 'computed';
  }
}
