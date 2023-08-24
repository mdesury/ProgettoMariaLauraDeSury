import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  titolo: string = '';
  autore: string = '';
  codice: string = '';
  archivio = new Archivio(this.servizio);
  lista = this.archivio.lista;
  errore: string = '';

  aggiungiLibro() {
    if (!this.titolo || !this.autore || !this.codice) {
      this.errore = 'Devi compilare tutti i campi.';
    } else {
      this.errore = '';
      
      this.archivio.aggiungiLibro(this.titolo, this.autore, this.codice);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    }
  }

  constructor(private servizio: Service) { }

  ngOnInit() {
   
  }
}
