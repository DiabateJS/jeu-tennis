import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ServerChoiceComponent } from './server-choice/server-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    ServerChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
