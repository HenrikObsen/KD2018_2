import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Mail } from '../models/Mail';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

declare var jquery:any;
declare var $ :any;



@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss','../css/font-awesome.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class KontaktComponent implements OnInit {

  public bmData;

  public i1Data;
  
  kData = 
    {
      adresse: "Skakkesholm 20",
      bynavn: "Grenaa"     
    }; 

    
    databasen = 'http://kdapi.duser.net/api/Data/SendMail/';  
     data;  
    Name='';  
    Sortering=''; 
    submitted = false;  
    extractData: number;  
    handleErrorObservable;  
    
    Navn;
    Email;
    Emne;  
    Tekst;
  
  
    onSubmit() {      
      let mail = new Mail(
        this.Email,
        this.Navn,
        this.Emne,
        this.Tekst,        
      );
      //console.log(mail);
     this.sendMail(mail);  
    }
  
    constructor(private http:Http, private _dataService: DataService) { }   
  
    sendMail(mail :Mail) {  
      //let headers = new Headers({ 'Content-Type': 'application/json' });    
      //let options = new RequestOptions({ headers: headers });
     //this.http.post(this.databasen, cat, options)  
      //.subscribe();
      
      //document.getElementById("sendMSG").style.display = "block";
      document.getElementById("myForm").className = "fadeOut";
      document.getElementById("sendMSG").className = "fadeIn";
    
      //document.getElementById("sendMSG").classList.add('fadeIn');

      //document.getElementById("MyElement").classList.remove('MyClass');
  //document.getElementById("sendMSG").style.display = "block";
  //document.getElementById("myForm").style.display = "none";

      let headers = new Headers({ 'Authorization': 'TokenValue' });  
      let options = new RequestOptions({ headers: headers });  
  
  
      this.http.post(this.databasen, mail, options)  
      .subscribe( data => console.log(data["_body"]),  
        error => {  
          console.log(JSON.stringify(error.json()));  
      });  
    
    }

  ngOnInit() {

    this._dataService.getAll("infobox?categories=10")
    .subscribe(data => this.i1Data = data)

    this._dataService.getAll("bestyrelsen")
    .subscribe(data => this.bmData = data)
  }

}
