import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OmOsComponent } from './om-os/om-os.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AktiviteterComponent } from './aktiviteter/aktiviteter.component';
import { IndmeldelseComponent } from './indmeldelse/indmeldelse.component';
import { HnResolver } from './_resolvers/hn.resolver';
import { HomeResolver } from './_resolvers/home.resolver';
import { OmOsResolver } from './_resolvers/omos.resolver';
import { IndmeldelseResolver } from './_resolvers/indmeldelse.resolver';
import { AktiviteterResolver } from './_resolvers/aktiviteter.resolver';
import { KontaktResolver } from './_resolvers/kontakt.resolver';

const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent, resolve: {data: HomeResolver}},
  { path: 'omos', component: OmOsComponent, resolve: {data: OmOsResolver}},
  { path: 'kontakt', component: KontaktComponent, resolve: {data: KontaktResolver}},
  { path: 'aktiviteter', component: AktiviteterComponent, resolve: {data: AktiviteterResolver}},
  { path: 'indmeldelse', component: IndmeldelseComponent, resolve: {data: IndmeldelseResolver}},

 // { path: 'beerlist/:id', component: BeerListComponent},  

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    HnResolver
  ]
})
export class AppRoutingModule { }
