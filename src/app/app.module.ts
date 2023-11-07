import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule, ClrModal, ClrModalModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlternativeBoxComponent } from './components/alternative-box/alternative-box.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BoxQuestionComponent } from './components/questions/box-question/box-question.component';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { LpCorrectionComponent } from './pages/lp-correction/lp-correction.component';
import { LpQuestionComponent } from './pages/lp-question/lp-question.component';
import { LpWelcomeComponent } from './pages/lp-welcome/lp-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxQuestionComponent,
    LpWelcomeComponent,
    WelcomeBoxComponent,
    LpQuestionComponent,
    ProgressBarComponent,
    AlternativeBoxComponent,
    LpCorrectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    ClrModalModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
