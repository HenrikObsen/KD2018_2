import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { DataService } from '../_services/data.service';
import '../js/jquery.bxslider.js';
declare var jquery: any;
declare var $: any;
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../css/font-awesome.min.css', '../css/jquery.bxslider.css'],
  encapsulation: ViewEncapsulation.None
})


export class HomeComponent implements OnInit {

  HnData;
  public p1Data;
  public p2Data;
  public i1Data;
  public slides;

 public homeText;
 constructor(private _dataService: DataService, private route: ActivatedRoute) { }
  //public innerWidth: any;
  //public show: boolean = true; 

  ngOnInit() {    

    this.HnData = this.route.snapshot.data;
    //console.log(this.HnData.message[1].title);
    //console.log(this.HnData["data"][1][0].content.rendered);
    //console.log(this.HnData["data"][0][0].link);
    //console.log(this.HnData.test);

    $('.bxslider').bxSlider({
      auto: true,
      mode: 'fade',
      }
    );

    this.slides = this.HnData["data"][0];
    //this._dataService.getAll("Slider")
    //.subscribe(data => this.slides = data)

    this.homeText = this.HnData["data"][1][0];
    //this._dataService.getHomeText()
    //.subscribe(data => this.homeText = data[0])

    this.p1Data = this.HnData["data"][2];
    //this._dataService.getImageBoxes(5)
    //.subscribe(data => this.p1Data = data)

    this.p2Data = this.HnData["data"][3];
    //this._dataService.getImageBoxes(6)
    //.subscribe(data => this.p2Data = data)

    this.i1Data = this.HnData["data"][4];
    //this._dataService.getInfoBoxes(4)
    //.subscribe(data => this.i1Data = data)
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
