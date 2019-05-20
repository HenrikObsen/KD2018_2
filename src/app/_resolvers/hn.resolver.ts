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
export class HnResolver implements Resolve<any> {
   
    constructor(private hnService: HnService){

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
        let slides =  this.hnService.getAll("Slider");
        let hometext = this.hnService.getHomeText();
        let p1Data = this.hnService.getImageBoxes(5);
        let p2Data = this.hnService.getImageBoxes(6);
        let i1Data = this.hnService.getInfoBoxes(4);
        
         return forkJoin([slides, hometext, p1Data, p2Data, i1Data]);
         
    }
}

