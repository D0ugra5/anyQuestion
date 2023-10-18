import { Component } from '@angular/core';

@Component({
  selector: 'app-lp-welcome',
  templateUrl: './lp-welcome.component.html',
  styleUrls: ['./lp-welcome.component.css'],
})
export class LpWelcomeComponent {
  codigoJSON = ''; // Inicialize a variável para armazenar o JSON
  jsonFormatado = ''; // Variável para armazenar o JSON formatado
  exibirJSON() {
    try {
      const objetoJSON = JSON.parse(this.codigoJSON);
      this.jsonFormatado = JSON.stringify(objetoJSON, null, 2);
    } catch (e: any) {
      this.jsonFormatado = 'Erro ao analisar o JSON: ' + e.message;
    }
  }
}
