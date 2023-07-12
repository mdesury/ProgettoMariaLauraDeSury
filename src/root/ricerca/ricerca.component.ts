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
  mostraNessunLibroTrovato: boolean = false;

  
  ricercaLibro() {
    let chiave = (document.getElementById('trovaLibro') as HTMLInputElement).value;
  
    if (chiave.trim() === '') {
      this.risultatiRicerca = []; // Barra di ricerca vuota, assegna un array vuoto come risultato
      this.mostraNessunLibroTrovato = false; // Nascondi la scritta "Nessun libro trovato"
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
  
      if (this.risultatiRicerca.length === 0) {
        this.mostraNessunLibroTrovato = true; // Mostra la scritta "Nessun libro trovato"
      } else if (this.risultatiRicerca.length === 1) {
        console.log("Libro trovato");
      } else {
        console.log("Numero di corrispondenze: " + this.risultatiRicerca.length);
      }
    }
    
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  } 

  prestitoLibro() {
    if (this.risultatiRicerca.length === 1) {
      let libro = this.risultatiRicerca[0];
      libro.disponibile = false;
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    }
  }
   

  constructor(private servizio: Service) {}

  ngOnInit() {

  }
}
