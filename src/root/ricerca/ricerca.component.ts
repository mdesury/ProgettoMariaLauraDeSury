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
  mostraPulsantePrestito: boolean = false;
  libroTarget: Libro = new Libro('', '', '');
  libroTargetLibero: boolean = false;

  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio);
  }

  async ricercaLibro() {
    let chiave = this.ricerca.trim();

    if (chiave === '') {
      this.risultatiRicerca = [];
      this.mostraPulsantePrestito = false;
      return; // Aggiungi un return per uscire dalla funzione quando non c'è alcuna chiave di ricerca
    }

    try {
      this.risultatiRicerca = await this.archivio.ricercaLibro(chiave);
      this.mostraPulsantePrestito = this.risultatiRicerca.length === 1;

      if (this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = true;
        this.libroTarget = this.risultatiRicerca[0];
        this.libroTargetLibero = this.libroTarget.libero();
      }
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
      // Puoi gestire l'errore qui, ad esempio, mostrando un messaggio all'utente
    }
  }
}
