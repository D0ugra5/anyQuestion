export interface QuestionAndAnswer {
  alternatives: AlternativeQuestion;
  pergunta: string;
  resposta_correta: string;
  answered: string;
}

export interface AlternativeQuestion {
  a: string;
  b: string;
  c: string;
  d: string;
}
