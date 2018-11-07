import { Component, OnInit, ViewEncapsulation, Injectable, ViewChild  } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { Indm } from '../models/Indm';
import { Mail } from '../models/mail';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-indmeldelse',
  templateUrl: './indmeldelse.component.html',
  styleUrls: ['./indmeldelse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class IndmeldelseComponent implements OnInit {
 @ViewChild("f") test: NgForm;
 databasen = 'http://kdapi.duser.net/api/Data/SendMail/'; 

  extractData: any;
  result: number = 0;
 
  Fodselsdag: string;
  Type: number = 800;
  DSF = false;
  Luft = false;
  Svommehal = false;
  Navn: string;
  Adresse: string;
  Postnr: string;
  Bynavn:string;
  Tlf:string;
  Email: string;
  
  
  onSubmit() {     
    
    this.sendMail();

    
  }  

  constructor(private http:Http, private _dataService: DataService) { 
  } 



sendMail() {
let body = "<h2>INDMELDELSE</h2>" + "<b>" + this.Navn + "</b><br/>" +
this.Fodselsdag + "<br/>" +
this.Adresse + "<br/>" +
this.Postnr + " " +this.Bynavn + "<br/>" +
this.Tlf + "<br/>" +
this.Email + "<br/><br/><hr/>" +
"Medlemstype: " + this.Type + "<br/>" +
"DSF: " + this.DSF + "<br/>" +
"Luft: " + this.Luft + "<br/>" +
"Svømmehal: " + this.Svommehal + "<br/>";


    let mail = new Mail(
      this.Email,
      this.Navn,
      "KattegatDykkerne.dk",
      body,        
    );
    document.getElementById("myForm").className = "fadeOut";
    document.getElementById("sendMSG").className = "fadeIn";

    let headers = new Headers({ 'Authorization': 'TokenValue' });  
      let options = new RequestOptions({ headers: headers });  
  
  
      this.http.post(this.databasen, mail, options)  
      .subscribe( data => console.log(data["_body"]),  
        error => {  
          console.log(JSON.stringify(error.json()));  
      }); 
    }
  public content;

  ngOnInit() {
    this.test.valueChanges.subscribe(form => {
      this.result = +this.Type + (this.DSF ? 300:0) + (this.Luft ? 400:0) + (this.Svommehal ? 300:0);
      
      console.log(form);
    })
  
   this._dataService.getAll("indmeldelse")
   .subscribe(data => this.content = data)
  }

}
