import { Component } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  archivio: Archivio; // Rimuovi l'inizializzazione qui

  risultatiRicerca: Array<any> = [];
  ricerca: string = '';

  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio); // Passa l'istanza del servizio al costruttore di Archivio
  }

  ricercaLibro() {
    let chiave = this.ricerca.trim();

    if (chiave === '') {
      this.risultatiRicerca = [];
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
    }
  }
}
