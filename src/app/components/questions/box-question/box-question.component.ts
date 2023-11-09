import { Component, Input } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-box-question',
  templateUrl: './box-question.component.html',
  styleUrls: ['./box-question.component.css'],
})
export class BoxQuestionComponent {
  @Input({ required: true }) question!: QuestionAndAnswer;
}
