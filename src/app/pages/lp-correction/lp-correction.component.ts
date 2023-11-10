import { Component, OnInit } from '@angular/core';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-lp-correction',
  templateUrl: './lp-correction.component.html',
  styleUrls: ['./lp-correction.component.css'],
})
export class LpCorrectionComponent implements OnInit {
  ngOnInit(): void {
    this.hitRate();
  }
  questions: QuestionAndAnswer[] = JSON.parse(
    localStorage.getItem('question')!
  );

  textHitsRate: string = '';
  numberHitRate: number = 0;

  hitRate() {
    let hits = 0;
    const totalyQuestion = this.questions.length;
    for (let index = 0; index < totalyQuestion; index++) {
      if (
        this.questions[index].resposta_correta == this.questions[index].answered
      ) {
        console.log('aqui');
        hits = hits + 1;
      }
    }

    this.numberHitRate = (100 * hits) / totalyQuestion;
    if (this.numberHitRate > 70) {
      this.textHitsRate = ` Parabéns Seus Cranio de elephant Você acertou ${this.numberHitRate}%;`;
    } else {
      this.textHitsRate = `are you dumb? Traduzindo... Você Burro Tente Outra vez ${this.numberHitRate}%;`;
    }
  }
}
