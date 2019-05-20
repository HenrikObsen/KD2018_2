import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from '../_services/data.service';




@Injectable({
    providedIn: 'root'
  })
export class OmOsResolver implements Resolve<any> {
   
    constructor(private dataService: DataService){}

    
    resolve() {
             
         return this.dataService.getAllOmContent();
         
    }
}



