import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
})
export class SectionOneComponent implements OnInit {
  @Output() optionValue: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  select(option: HTMLInputElement) {
    this.optionValue.emit(option.value);
  }
}
