import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import '../js/jquery.bxslider.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../css/font-awesome.min.css', '../css/jquery.bxslider.css'],
  encapsulation: ViewEncapsulation.None
})


export class HomeComponent implements OnInit {

  public p1Data;
  public p2Data;
  public i1Data;
  public slides;

 public homeText;
 constructor(private _dataService: DataService) { }
  //public innerWidth: any;
  //public show: boolean = true; 

  ngOnInit() {    
    
    $('.bxslider').bxSlider({
      auto: true,
      mode: 'fade',
      }
    );

    this._dataService.getAll("Slider")
    .subscribe(data => this.slides = data)

    this._dataService.getHomeText()
    .subscribe(data => this.homeText = data[0])

    this._dataService.getImageBoxes(5)
    .subscribe(data => this.p1Data = data)

    this._dataService.getImageBoxes(6)
    .subscribe(data => this.p2Data = data)

    this._dataService.getInfoBoxes(4)
    .subscribe(data => this.i1Data = data)
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;

  //   if(this.innerWidth < "1000"){
  //     this.show = false;
  //   }
  //   else
  //   {
  //     this.show = true;

  //     $('.bxslider').bxSlider({
  //       auto: true,
  //       mode: 'fade',
  //     }
  //     );
  //   }
    
  // }
  

}
