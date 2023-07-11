import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {

  archivio = new Archivio(this.servizio);
  risultatiRicerca: Array<any> = []; // Variabile per memorizzare i risultati della ricerca
  ricerca: string = '';
  
  ricercaLibro() {
    let chiave = (document.getElementById('trovaLibro') as HTMLInputElement).value;
  
    if (chiave.trim() === '') {
      this.risultatiRicerca = []; // Barra di ricerca vuota, assegna un array vuoto come risultato
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
  
      if (this.risultatiRicerca.length === 0) {
        this.ricerca = 'Nessun libro trovato'; 
      }
    }
  
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }
  

  constructor(private servizio: Service) {}

  ngOnInit() {

  }
}

