import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aktiviteter',
  templateUrl: './aktiviteter.component.html',
  styleUrls: ['./aktiviteter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AktiviteterComponent implements OnInit {
  public i1Data;
  public aktivitet;

  constructor(private route: ActivatedRoute) { }
  public content;
  private DataFromResolver;

  ngOnInit() {

    this.DataFromResolver = this.route.snapshot.data;
    this.content = this.DataFromResolver.data;
    this.i1Data = this.content[0];
    this.aktivitet = this.content[1];

//    console.log(this.content);
    // this._dataService.getAll("infobox?categories=9")
    //   .subscribe(data => this.i1Data = data)

    // this._dataService.getAll("aktiviteter")
    //   .subscribe(data => this.aktivitet = data)
  }

}
