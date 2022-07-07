import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NewContent } from 'src/app/shared/model/text.model';

@Component({
  selector: 'app-section-long-name',
  templateUrl: './section-long-name.component.html',
  styleUrls: ['./section-long-name.component.scss'],
})
export class SectionLongNameComponent implements OnInit, OnChanges {
  @Input() newContent: [NewContent, string] = [{ id: 0, content: 'tt' }, ''];
  arr: NewContent[] = [];
  constructor() {}

  ngOnInit(): void {
    this.arr.length = 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.newContent[1] === 'paste') {
      this.arr.push(this.newContent[0]);
      console.log(this.arr);
    }
    if (this.newContent[1] === 'replace') {
      this.arr.length = 0;
    }
  }
}
