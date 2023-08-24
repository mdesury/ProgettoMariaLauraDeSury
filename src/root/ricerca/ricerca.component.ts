import { Component } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";
import { Libro } from './../Objects/Libro'; 

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  archivio: Archivio;
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraPulsantePrestito: boolean = false; // Aggiungi questa variabile

  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio);
  }

  ricercaLibro() {
    let chiave = this.ricerca.trim();

    if (chiave === '') {
      this.risultatiRicerca = [];
      this.mostraPulsantePrestito = false; // Resetta la variabile quando non ci sono risultati
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
      this.mostraPulsantePrestito = this.risultatiRicerca.length === 1; // Imposta a true quando c'è un solo risultato
    }
  }

  prendiInPrestito(libro: Libro, persona: string) {
    libro.prendiInPrestito(persona);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }
}
