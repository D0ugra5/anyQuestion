import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxQuestionComponent } from './components/questions/box-question/box-question.component';
import { LpWelcomeComponent } from './pages/lp-welcome/lp-welcome.component';
import { WelcomeBoxComponent } from './components/welcome-box/welcome-box.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BoxQuestionComponent,
    LpWelcomeComponent,
    WelcomeBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ClarityModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
