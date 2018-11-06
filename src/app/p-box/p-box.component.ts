import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-p-box',
  templateUrl: './p-box.component.html'
})
export class PBoxComponent implements OnInit {

  @Input() pBox: any;

  constructor() { }

  ngOnInit() {
  }

}
