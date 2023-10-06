import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxQuestionComponent } from './components/questions/box-question/box-question.component';

@NgModule({
  declarations: [AppComponent, BoxQuestionComponent],
  imports: [BrowserModule, AppRoutingModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
