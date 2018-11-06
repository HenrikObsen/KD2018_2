import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-i-box',
  templateUrl: './i-box.component.html'

})
export class IBoxComponent implements OnInit {

  @Input() iBox: any;
  constructor() { }

  ngOnInit() {
  }

}
