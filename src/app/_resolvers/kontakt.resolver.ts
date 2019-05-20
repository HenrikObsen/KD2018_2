import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from '../_services/data.service';



import {Observable, of, throwError, forkJoin, pipe, observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class KontaktResolver implements Resolve<any> {
   
    constructor(private dataService: DataService){

    }
    i1Data: any;
    aktivitet: any;
 
    
    resolve() {
        let i1Data =  this.dataService.getAll("infobox?categories=10");
        let bmData = this.dataService.getAll("bestyrelsen");
              
         return forkJoin([i1Data, bmData]);
         
    }
}


