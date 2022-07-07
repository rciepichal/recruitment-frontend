import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NewContent } from 'src/app/shared/model/text.model';
import data from '../../../data/data.json';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent implements OnInit {
  @Input() optionValue: string = '';
  @Output() text: EventEmitter<[NewContent, string]> = new EventEmitter();

  handleClick(type: string) {
    if (this.optionValue === 'firstOption') {
      this.text.emit([data[0], type]);
    }
    if (this.optionValue === 'secondOption') {
      this.text.emit([data[1], type]);
    }
    if (this.optionValue === 'randomOption') {
      this.text.emit([data[Math.floor(Math.random() * 13)], type]);
    }
  }

  ngOnInit(): void {
    console.log(this.optionValue);
  }
}
