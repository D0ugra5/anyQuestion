import { Component } from '@angular/core';

@Component({
  selector: 'app-lp-welcome',
  templateUrl: './lp-welcome.component.html',
  styleUrls: ['./lp-welcome.component.css'],
})
export class LpWelcomeComponent {
  opened = false;

  codigoJSON = '';
  jsonFormatado = '';

  exibirJSON() {
    try {
      const objetoJSON = JSON.parse(this.codigoJSON);

      if (this.validarJSON(objetoJSON)) {
        console.log('O JSON segue o formato da interface QuestionAndAnswer.');
      } else {
        console.log(
          'O JSON não segue o formato da interface QuestionAndAnswer.'
        );
      }

      this.jsonFormatado = JSON.stringify(objetoJSON, null, 2);
    } catch (e: any) {
      this.jsonFormatado = 'Erro ao analisar o JSON: ' + e.message;
      this.opened = true;
    }
  }

  validarJSON(jsonString: any) {
    try {
      for (let index = 0; index < jsonString.length; index++) {
        if (
          jsonString[index].pergunta &&
          jsonString[index].alternativas &&
          jsonString[index].alternativas.a &&
          jsonString[index].alternativas.b &&
          jsonString[index].alternativas.c &&
          jsonString[index].alternativas.d &&
          jsonString[index].resposta_correta
        ) {
        } else {
          return false;
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
