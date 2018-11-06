import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HomeComponent } from './home/home.component';
import { PBoxComponent } from './p-box/p-box.component';
import { IBoxComponent } from './i-box/i-box.component';
import { OmOsComponent } from './om-os/om-os.component';
import { AktiviteterComponent } from './aktiviteter/aktiviteter.component';
import { IndmeldelseComponent } from './indmeldelse/indmeldelse.component';
import { BMemberComponent } from './b-member/b-member.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    HomeComponent,
    PBoxComponent,    
    IBoxComponent,
    OmOsComponent,
    AktiviteterComponent,
    IndmeldelseComponent,
    BMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
