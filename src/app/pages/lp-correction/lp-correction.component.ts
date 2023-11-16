import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-lp-correction',
  templateUrl: './lp-correction.component.html',
  styleUrls: ['./lp-correction.component.css'],
})
export class LpCorrectionComponent implements OnInit {
  constructor(private route: Router) {}
  questions: QuestionAndAnswer[] = [];
  iscorrect: boolean = true;
  textHitsRate: string = '';
  numberHitRate: number = 0;

  ngOnInit(): void {
    this.questions = JSON.parse(localStorage.getItem('question')!);
    if (this.questions.length === 0) {
      this.route.navigate(['']);
    } else {
      this.hitRate();
    }
  }

  hitRate() {
    let hits = 0;
    const totalyQuestion = this.questions.length;
    for (let index = 0; index < totalyQuestion; index++) {
      if (
        this.questions[index].resposta_correta == this.questions[index].answered
      ) {
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

  tryOut() {
    this.questions.forEach((question) => {
      question.answered = '';
    });

    localStorage.setItem('question', JSON.stringify(this.questions));
    localStorage.setItem('answer', '');

    this.route.navigate(['/question']);
  }
}
