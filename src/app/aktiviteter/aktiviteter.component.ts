import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aktiviteter',
  templateUrl: './aktiviteter.component.html',
  styleUrls: ['./aktiviteter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AktiviteterComponent implements OnInit {
  public i1Data;
  public aktivitet;

 constructor(private _dataService: DataService) { }

  ngOnInit() {

    this._dataService.getAll("infobox?categories=9")
    .subscribe(data => this.i1Data = data)

    this._dataService.getAll("aktiviteter")
    .subscribe(data => this.aktivitet = data)
  }

}
