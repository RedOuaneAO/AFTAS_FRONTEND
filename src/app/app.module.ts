import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CompetitionModule } from './competition/competition.module';
import { FishModule } from './fish/fish.module';
import { MemberModule } from './member/member.module';
import { LevelModule } from './level/level.module';
import { RankingModule } from './ranking/ranking.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CompetitionModule,
    FishModule,
    MemberModule,
    LevelModule,
    RankingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
