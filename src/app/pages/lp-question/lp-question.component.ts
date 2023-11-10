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

  nextQuestion(optionMarked?: string): void {
    const howQuestionBefore = this.questionNow();
    if (optionMarked) {
      localStorage.setItem('answer', String(howQuestionBefore));
    } else {
      //tratar aqui se não houver alternativa selecionada
    }

    const isFinish = this.questionNow() == this.totalyQuestions ? true : false;

    if (isFinish) {
      this.router.navigate(['/correct']);
    } else {
      const attQuestionNow = this.questionNow();
      const questionNow = this.questions[attQuestionNow];

      this.question = questionNow;

      this.questions[howQuestionBefore].answered = optionMarked!;

      localStorage.setItem('question', JSON.stringify(this.questions));
      this.progressBar = this.updateProgressBar(
        this.totalyQuestions,
        attQuestionNow
      );
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
