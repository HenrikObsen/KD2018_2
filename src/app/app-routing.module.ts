import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OmOsComponent } from './om-os/om-os.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AktiviteterComponent } from './aktiviteter/aktiviteter.component';
import { IndmeldelseComponent } from './indmeldelse/indmeldelse.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  { path: 'omos', component: OmOsComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'aktiviteter', component: AktiviteterComponent},
  { path: 'indmeldelse', component: IndmeldelseComponent},

 // { path: 'beerlist/:id', component: BeerListComponent},  

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
