import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlternativeQuestion } from 'src/app/interfaces/question-interface';

@Component({
  selector: 'app-alternative-box',
  templateUrl: './alternative-box.component.html',
  styleUrls: ['./alternative-box.component.css'],
})
export class AlternativeBoxComponent implements OnInit {
  @Input({ required: true }) nameRadioBox!: AlternativeQuestion;
  @Input() styleBorder!: string;
  @Input() isDisabled!: boolean;
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {}

  onItemChange(value: any) {
    this.optionSelected.emit(value.target.value);
  }
}
