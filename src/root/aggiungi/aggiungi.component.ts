import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  archivio = new Archivio();
  lista = this.archivio.lista;
  errore: string = '';

  aggiungiLibro() {
    let Ititolo = document.getElementById('titolo') as HTMLInputElement;
    let Iautore = document.getElementById('autore') as HTMLInputElement;
    let Icodice = document.getElementById('codice') as HTMLInputElement;

    if (!Ititolo.value || !Iautore.value || !Icodice.value) {
      this.errore = 'Bisogna compilare tutti i campi! Riprova.';
    } else {
      this.errore = ''; // Resetta il messaggio di errore
      console.log(this.archivio.lista);
  
      this.archivio.aggiungiLibro(Ititolo.value, Iautore.value, Icodice.value);
    }
  }
 
  rimuoviLibro(codice: string) {
    this.archivio.rimuoviLibro(codice);
    this.lista = this.archivio.lista;
    console.log(this.archivio.lista);
  }

  constructor() { }

  ngOnInit() {
   
  }
}
