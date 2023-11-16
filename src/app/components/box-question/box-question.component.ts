import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

declare var Object: any;

@Component({
  selector: 'app-box-question',
  templateUrl: './box-question.component.html',
  styleUrls: ['./box-question.component.css'],
})
export class BoxQuestionComponent implements OnInit {
  Object = Object;

  @Output() nextClick: EventEmitter<any> = new EventEmitter();
  @Input() hiddenNext!: boolean;
  @Input({ required: true }) question!: QuestionAndAnswer;
  optionsSelected: string = '';
  @Input() isCorrect!: boolean;

  ngOnInit(): void {
    this.resetButton();
  }

  nextQuestion() {
    if (this.optionsSelected) {
      this.nextClick.emit(this.optionsSelected);
      this.resetButton();
    } else {
      alert('Seleione uma alternativa');
    }
  }

  resetButton() {
    const radioButtons = document.getElementsByName('radio-full');
    radioButtons.forEach((radioButton: any) => {
      radioButton.checked = false;
    });
  }

  checkedMarked(event: any) {
    this.optionsSelected = event.target.value;
  }

  borderColorRightOrWrong(alternative: string): string {
    const option = this.getValueAlternative(alternative);
    const notBorder = 'none';
    if (!this.isCorrect) {
      return notBorder;
    }

    if (option === this.question.resposta_correta) {
      return '1px solid green';
    } else if (
      option === this.question.answered &&
      option != this.question.resposta_correta
    ) {
      return '1px solid red ';
    } else {
      return notBorder;
    }
  }

  getValueAlternative(value: string): string {
    const valuesAlternatives = Object.values(this.question.alternatives);
    const keysAlternatives = Object.keys(this.question.alternatives);
    const index = valuesAlternatives.findIndex(
      (item: string) => item === value
    );

    return keysAlternatives[index];
  }
}
