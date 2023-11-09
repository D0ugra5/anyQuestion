import { Component } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-lp-correction',
  templateUrl: './lp-correction.component.html',
  styleUrls: ['./lp-correction.component.css'],
})
export class LpCorrectionComponent {
  question: QuestionAndAnswer = {
    alternatives: { a: '', b: '', c: '', d: '' },
    pergunta: '',
    resposta_correta: '',
    answered: '',
  };
}
