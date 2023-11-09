import { Component, OnInit } from '@angular/core';
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
  constructor(private router: Router) {}
  progressBar: number = 23;
  questions: QuestionAndAnswer[] = JSON.parse(
    localStorage.getItem('question')!
  );

  ngOnInit(): void {
    if (!this.questions) this.router.navigate(['/']);
    this.nextQuestion();
  }

  nextQuestion() {
    const totalyQuestions: number = this.questions.length;
    this.progressBar = (100 * this.questionNow()) / totalyQuestions;
    const isFinish = this.questionNow() == totalyQuestions ? true : false;

    if (isFinish) {
      this.router.navigate(['/correct']);
    } else {
      this.question = this.questions[this.questionNow()];
      localStorage.setItem('answer', String(this.questionNow()));
    }
  }

  questionNow(): number {
    const questionNumber = localStorage.getItem('answer');
    if (!questionNumber || questionNumber === undefined) return 0;

    const questionNumberNow = parseInt(questionNumber) + 1;
    return questionNumberNow;
  }

  updateProgressBar() {}
}
