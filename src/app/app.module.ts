import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbyssComponent } from './game/abyss/abyss.component';
import { PadComponent } from './game/pad/pad.component';

@NgModule({
  declarations: [
    AppComponent,
    AbyssComponent,
    PadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
