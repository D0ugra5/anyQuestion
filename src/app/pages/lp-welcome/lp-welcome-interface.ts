interface QuestionAndAnswer {
  alternative: AlternativeQuestion;
  pergunta: string;
  resposta_correta: string;
}

interface AlternativeQuestion {
  a: string;
  b: string;
  c: string;
  d: string;
}

export default QuestionAndAnswer;
