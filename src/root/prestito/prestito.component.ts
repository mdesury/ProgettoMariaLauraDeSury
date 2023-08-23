import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";
import { Libro } from './../Objects/Libro'; 

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css']
})
export class PrestitoComponent implements OnInit {
  archivio: Archivio;
  ricerca: string = '';
  risultatiRicerca: Array<Libro> = [];
  libroSelezionato: Libro | undefined;
  personaInPrestito: string = '';

  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio); 
  }

  cercaLibro() {
    this.risultatiRicerca = this.archivio.ricercaLibro(this.ricerca);
  
  
    if (this.risultatiRicerca.length === 1) {
      this.libroSelezionato = this.risultatiRicerca[0];
    } else {
      this.libroSelezionato = undefined;
    }
  }
  

  selezionaLibro(libro: Libro) {
    this.libroSelezionato = libro;
    this.risultatiRicerca = [];
  }

  prendiInPrestito() {
    if (this.libroSelezionato) {
      this.libroSelezionato.prendiInPrestito(this.personaInPrestito);
      this.personaInPrestito = '';
    }
  }

  restituisciLibro() {
    if (this.libroSelezionato) {
      this.libroSelezionato.restituisci();
    }
  }

  ngOnInit() {
  }
}
