import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionAndAnswer } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-lp-question',
  templateUrl: './lp-question.component.html',
  styleUrls: ['./lp-question.component.css'],
})
export class LpQuestionComponent implements OnInit {
  question: QuestionAndAnswer = {
    alternatives: { a: '', b: '', c: '', d: '' },
    pergunta: '',
    resposta_correta: '',
    answered: '',
  };

  questions: QuestionAndAnswer[] = JSON.parse(
    localStorage.getItem('question')!
  );
  totalyQuestions: number = this.questions.length;
  constructor(private router: Router) {}
  progressBar: number = 23;

  ngOnInit(): void {
    if (!this.questions) this.router.navigate(['/']);
    this.nextQuestion();
  }

  nextQuestion(): void {
    const howQuestionNow = this.questionNow();
    this.progressBar = this.updateProgressBar(
      this.totalyQuestions,
      howQuestionNow
    );
    const isFinish = this.questionNow() == this.totalyQuestions ? true : false;

    if (isFinish) {
      this.router.navigate(['/correct']);
    } else {
      this.question = this.questions[howQuestionNow];

      localStorage.setItem('answer', String(howQuestionNow));
    }
  }

  questionNow(): number {
    const questionNumber = localStorage.getItem('answer');
    if (!questionNumber || questionNumber === undefined) return 0;

    const questionNumberNow = parseInt(questionNumber) + 1;
    return questionNumberNow;
  }

  updateProgressBar(totalyQuestion: number, numberQuestion: number): number {
    return (100 * numberQuestion) / totalyQuestion;
  }
}
