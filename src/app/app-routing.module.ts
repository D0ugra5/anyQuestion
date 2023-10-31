import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LpWelcomeComponent } from './pages/lp-welcome/lp-welcome.component';
import { LpQuestionComponent } from './pages/lp-question/lp-question.component';
import { LpCorrectionComponent } from './pages/lp-correction/lp-correction.component';

const routes: Routes = [
  { path: '', component: LpWelcomeComponent },
  { path: 'question', component: LpQuestionComponent },
  { path: 'correct', component: LpCorrectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
