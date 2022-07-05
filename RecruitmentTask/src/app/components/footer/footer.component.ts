import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Output() showName: EventEmitter<boolean> = new EventEmitter();
  @Output() clickReset: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClicked() {
    this.showName.emit();
  }
  onReset() {
    this.clickReset.emit();
  }
}
