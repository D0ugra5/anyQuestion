import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lp-welcome',
  templateUrl: './lp-welcome.component.html',
  styleUrls: ['./lp-welcome.component.css'],
})
export class LpWelcomeComponent {
  constructor(private router: Router) {}
  opened = false;
  codigoJSON = '';
  jsonFormatado = '';

  exibirJSON() {
    try {
      const objetoJSON = JSON.parse(this.codigoJSON);

      if (this.validarJSON(objetoJSON)) {
        this.jsonFormatado = JSON.stringify(objetoJSON, null, 2);
        localStorage.setItem('question', this.jsonFormatado);
        this.router.navigate(['/question']);
      } else {
        console.log(
          'O JSON não segue o formato da interface QuestionAndAnswer.'
        );
      }
    } catch (e: any) {
      localStorage.clear();
      this.jsonFormatado = 'Erro ao analisar o JSON: ' + e.message;
      this.opened = true;
    }
  }

  validarJSON(jsonString: any) {
    try {
      for (let index = 0; index < jsonString.length; index++) {
        if (
          jsonString[index].pergunta &&
          jsonString[index].alternatives &&
          jsonString[index].alternatives.a &&
          jsonString[index].alternatives.b &&
          jsonString[index].alternatives.c &&
          jsonString[index].alternatives.d &&
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
