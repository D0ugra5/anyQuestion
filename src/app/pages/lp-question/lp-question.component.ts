import { Component } from '@angular/core';
import QuestionAndAnswer from '../lp-welcome/lp-welcome-interface';

@Component({
  selector: 'app-lp-question',
  templateUrl: './lp-question.component.html',
  styleUrls: ['./lp-question.component.css'],
})
export class LpQuestionComponent {
  progressBar: number = 0;
  questions: QuestionAndAnswer = JSON.parse(localStorage.getItem('question')!);
}
