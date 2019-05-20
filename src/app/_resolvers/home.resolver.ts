import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { HnService } from '../_services/hn.service';
import { DataService } from '../_services/data.service';



import {Observable, of, throwError, forkJoin, pipe, observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { hn } from '../_models/hn';

//https://alligator.io/angular/route-resolvers/
//https://www.udemy.com/build-an-app-with-aspnet-core-and-angular-from-scratch/learn/v4/t/lecture/8708540#
@Injectable({
    providedIn: 'root'
  })
export class HomeResolver implements Resolve<any> {
   
    constructor(private dataService: DataService){

    }
slides: any;
hometext: any;

    //resolve() {
       // this.slides =  this.hnService.getAll("Slider");
        //this.hometext = this.hnService.getHomeText();

        //let hnData = new hn();
        //hnData.Slider = this.slides;
       // hnData.HomeText = this.hometext;
       
         // return this.hometext;

        ////return this.http.get<JSON>(this._pageUrl + "Slider");
    //}
  
    
    resolve() {
        let slides =  this.dataService.getAll("Slider");
        let hometext = this.dataService.getHomeText();
        let p1Data = this.dataService.getImageBoxes(5);
        let p2Data = this.dataService.getImageBoxes(6);
        let i1Data = this.dataService.getInfoBoxes(4);
        
         return forkJoin([slides, hometext, p1Data, p2Data, i1Data]);
         
    }
}


