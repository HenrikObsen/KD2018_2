import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-om-os',
  templateUrl: './om-os.component.html',
  styleUrls: ['./om-os.component.scss']
})
export class OmOsComponent implements OnInit {

  
  constructor(private _dataService: DataService) { }   
  
  public content;

     ngOnInit(){
      this._dataService.getAllOmContent()
      .subscribe(data => this.content = data)
     }
}
