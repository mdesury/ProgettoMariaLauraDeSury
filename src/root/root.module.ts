import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RicercaComponent } from './ricerca/ricerca.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import {RimuoviComponent } from './rimuovi/rimuovi.component';
import {PrestitoComponent } from './prestito/prestito.component';
import {RestituisciComponent } from './restituisci/restituisci.component';
import {PresoPrestitoComponent } from './preso-prestito/preso-prestito.component';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    RootComponent,
    RicercaComponent,
    AggiungiComponent,
    RimuoviComponent,
    PrestitoComponent,
    RestituisciComponent,
    PresoPrestitoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }
