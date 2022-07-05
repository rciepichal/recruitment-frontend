import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  showName: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  setShowName() {
    this.showName = true;
  }
  setReset() {
    this.showName = false;
  }
}
