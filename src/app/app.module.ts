import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ServerChoiceComponent } from './server-choice/server-choice.component';
import { Player2PositionsManagerComponent } from './player2-positions-manager/player2-positions-manager.component';
import { ScoreComponent } from './score/score.component';
import { HistoricComponent } from './historic/historic.component';

@NgModule({
  declarations: [
    AppComponent,
    TerrainComponent,
    ServerChoiceComponent,
    Player2PositionsManagerComponent,
    ScoreComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
