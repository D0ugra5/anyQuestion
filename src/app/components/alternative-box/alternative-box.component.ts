import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlternativeQuestion } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-alternative-box',
  templateUrl: './alternative-box.component.html',
  styleUrls: ['./alternative-box.component.css'],
})
export class AlternativeBoxComponent {
  @Input({ required: true }) alternatives!: AlternativeQuestion;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  onItemChange(value: any) {
    this.optionSelected.emit(value.target.value);
  }
}
