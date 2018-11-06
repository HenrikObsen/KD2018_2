import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b-member',
  templateUrl: './b-member.component.html',
  styleUrls: ['./b-member.component.scss']
})
export class BMemberComponent implements OnInit {

  @Input() member: any;
  constructor() { }

  ngOnInit() {
  }

}
