import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PractiseComponent } from './shared/components/practise/practise.component';

@NgModule({
  declarations: [
    AppComponent,
    PractiseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
