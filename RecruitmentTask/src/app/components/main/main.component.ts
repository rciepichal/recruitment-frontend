import { Component, OnInit } from '@angular/core';
import { NewContent } from 'src/app/shared/model/text.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  showName: boolean = false;
  option: string = '';
  newData: [NewContent, string] = [{ id: 0, content: '' }, ''];
  constructor() {}

  ngOnInit(): void {}
  setShowName() {
    this.showName = true;
  }
  setReset() {
    this.showName = false;
  }
  receivedOption(data: string) {
    this.option = data;
  }
  textLog(event: [NewContent, string]) {
    this.newData = [event[0], event[1]];
    console.log(event[0]);
  }
}
