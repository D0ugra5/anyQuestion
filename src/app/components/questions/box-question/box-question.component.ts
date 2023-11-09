import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-box-question',
  templateUrl: './box-question.component.html',
  styleUrls: ['./box-question.component.css'],
})
export class BoxQuestionComponent {
  @Output() nextClick: EventEmitter<any> = new EventEmitter();

  @Input({ required: true }) question!: QuestionAndAnswer;

  nextQuestion() {
    this.nextClick.emit();
  }
}
