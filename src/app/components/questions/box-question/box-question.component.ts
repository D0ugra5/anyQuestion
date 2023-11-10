import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-box-question',
  templateUrl: './box-question.component.html',
  styleUrls: ['./box-question.component.css'],
})
export class BoxQuestionComponent {
  @Output() nextClick: EventEmitter<any> = new EventEmitter();
  @Input() hiddenNext!: boolean;
  @Input({ required: true }) question!: QuestionAndAnswer;

  optionsSelected: string = '';

  nextQuestion() {
    if (this.optionsSelected) {
      this.nextClick.emit(this.optionsSelected);

      const radioButtons = document.getElementsByName('radio-full');
      radioButtons.forEach((radioButton: any) => {
        radioButton.checked = false;
      });
    }
  }

  checkedMarked(value: string) {
    this.optionsSelected = value;
  }
}
