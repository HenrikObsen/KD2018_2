import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
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

  bmData = [
    {
      titel: "Formand",
      navn: "Kristoffer Sørensen",
      adresse: "Skakkesholm 20",
      postnrBy: "8500 Grenaa",
      tlf:"Tlf: 21 70 25 40",
      email:"formanden@kattegatdykkerne.dk",
      image: "kristoffer.jpg" 
    },
    {
      titel: "Næstformand",
      navn: "Ole Riis",
      adresse: "Krattet 324",
      postnrBy: "8500 Grenaa",
      tlf:"Tlf: 29 63 38 77",
      email:"olr@terma.com",
      image: "Ole-Riis.jpg" 
    },{
      titel: "Sekretær",
      navn: "Jens Reinholt",
      adresse: "Nørrevangs Alle 10",
      postnrBy: "8410 Rønde",
      tlf:"",
      email:"",
      image: "paavej.png" 
    },{
      titel: "Kasserer",
      navn: "Kristoffer Sørensen",
      adresse: "",
      postnrBy: "",
      tlf:"",
      email:"",
      image: "paavej.png" 
    },{
      titel: "Bestyrelsesmedlem 1",
      navn: "Henrik Obsen",
      adresse: "Svinget 2",
      postnrBy: "8570 Trustrup",
      tlf:"Tlf: 42 78 96 05",
      email:"hto@djes.dk",
      image: "henrikobsen.jpg" 
    },{
      titel: "Suppleant 1",
      navn: "Maxime Combastel",
      adresse: "",
      postnrBy: "",
      tlf:"",
      email:"",
      image: "paavej.png" 
    },{
      titel: "Suppleant 2",
      navn: "Daniel Meyer",
      adresse: "",
      postnrBy: "",
      tlf:"",
      email:"",
      image: "paavej.png" 
    }
  ]; 

  i1Data = [
    {
      icon: "fa-address-book",
      headline: "Kontakt",
      content: "Kattagat Dykkerne Grenaa<br>att: Kristoffer Sørensen<br> Skakkesholm 20<br>DK-8500 Grenaa<br><br>formanden@kattagatdykkerne.dk<br>Tlf: 21702540"
    },
    {
      icon: "fa-facebook",
      headline: "Facebook",
      content: "Det meste af vores kommunikation foregår via vores to facebook grupper. Den ene grupper er for alle, og er typisk der vi slår aktiviteter op. Den anden er lukket og kun til intern brug for klubbens medlemmer. <br><br>du finder vores facebook gruppe ved at klikke <a href='https://www.facebook.com/groups/kattegatdykkerne/' target='_blank'>her</a>"
    }, 
     {
      icon: "fa-star",
      headline: "Luftpåfyldning",
      content: " Luftfyldning er gratis for klubbens medlemmer men er du ikke medlem, koster det 40 kr. pr. flaske. Vi fylder både 200 og 300 bar. Vi har ingen faste åbningstider men du er velkommen til at kontakte et af vores medlemmer her under og lave en aftale."
    }
  ]; 
  kData = 
    {
      adresse: "Skakkesholm 20",
      bynavn: "Grenaa"     
    }; 

    
    databasen = 'http://api.kattegatdykkerne.dk/api/Data/SendMail/';  
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
  
    constructor(private http:Http) { }   
  
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
  }

}
