import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HnService {
  endpoint = 'https://hnpwa.com/api/v0/news.json'
  private _pageUrl: string = "http://wp.kattegatdykkerne.dk/wp-json/wp/v2/"
    constructor(private http: HttpClient) { }

    getTopPosts(){
      return this.http.get<JSON>(this.endpoint)
    }

    getAll(endpoint): Observable<JSON>{
      return this.http.get<JSON>(this._pageUrl + endpoint);              
    }

    getHomeText(): Observable<JSON>{    
      return this.http.get<JSON>(this._pageUrl + "home");
    }

    getImageBoxes(category): Observable<JSON>{
      return this.http.get<JSON>(this._pageUrl + "billedbox?categories=" + category)
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
    
    errorHandler(error : HttpErrorResponse){
      return throwError("Der gik noget galt : " + error.message);
    }
}
