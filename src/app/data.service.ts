import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  private _url: string = "/assets/Data/"
  private _pageUrl: string = "http://localhost/wp-json/wp/v2/"

  constructor(private http: HttpClient) { }


  getAll(endpoint): Observable<JSON>{
    return this.http.get<JSON>(this._pageUrl + endpoint)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }
//***************************** OM KLUBBEN **********************************************************/
getAllOmContent(): Observable<JSON>{
  return this.http.get<JSON>(this._pageUrl + "omklubben")
  .pipe(catchError(error => {
    return throwError("Der gik noget galt : " + error.message);
  }));         
}

getOmContent(category): Observable<JSON>{
  return this.http.get<JSON>(this._pageUrl + "omklubben?categories=" + category)
  .pipe(catchError(error => {
    return throwError("Der gik noget galt : " + error.message);
  }));         
}


//***************************** HOME ***************************************************************/
  getHomeText(): Observable<JSON[]>{    
    return this.http.get<JSON[]>(this._pageUrl + "home")
        .pipe(catchError(this.errorHandler));
  }
  
  getHomeIinfBoxes(): Observable<JSON>{
    return this.http.get<JSON>(this._pageUrl + "ibox?categories=2")
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

  getInfoBoxes(category): Observable<JSON>{
    return this.http.get<JSON>(this._pageUrl + "infobox?categories=" + category)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

  getImageBoxes(category): Observable<JSON>{
    return this.http.get<JSON>(this._pageUrl + "billedbox?categories=" + category)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }


  // postHomeText(text:IText){
  //   return this.http.post("http://api.scubafun.dk/Data/SetValues/",text)     
  // }
  // getHomeOffers(): Observable<JSON>{
  //   return this.http.get<JSON>(this._pageUrl + "ibox?categories=2")
  //   .pipe(catchError(error => {
  //     return throwError("Der gik noget galt : " + error.message);
  //   }));         
  // }

  // getHomeText(): Observable<IText[]>{
    
  //   return this.http.get<IText[]>(this._url + "homeIText.json")
  //       .pipe(catchError(this.errorHandler));
  // }


  errorHandler(error : HttpErrorResponse){
    return throwError("Der gik noget galt : " + error.message);
  }
 
}
