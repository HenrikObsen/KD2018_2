import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Route, ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-om-os',
  templateUrl: './om-os.component.html',
  styleUrls: ['./om-os.component.scss']
})
export class OmOsComponent implements OnInit {

  DataFromResolver;
  constructor(private _dataService: DataService, private route: ActivatedRoute) { }   
  
  public content;

     ngOnInit(){

      this.DataFromResolver = this.route.snapshot.data;
      this.content = this.DataFromResolver.data;
     
      //this._dataService.getAllOmContent()
      //.subscribe(data => this.content = data)
     }
}
