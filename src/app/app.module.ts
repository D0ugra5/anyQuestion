import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxQuestionComponent } from './components/questions/box-question/box-question.component';
import { LpWelcomeComponent } from './pages/lp-welcome/lp-welcome.component';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { FormsModule } from '@angular/forms';
import { LpQuestionComponent } from './pages/lp-question/lp-question.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AlternativeBoxComponent } from './components/alternative-box/alternative-box.component';
import { LpCorrectionComponent } from './pages/lp-correction/lp-correction.component';
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
  imports: [BrowserModule, AppRoutingModule, ClarityModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
