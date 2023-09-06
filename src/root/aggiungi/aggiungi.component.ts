import { Component, Input, OnInit } from '@angular/core';
import { Archivio } from './../Oggetti/Archivio';
import { Service } from './../service.service';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css'],
})
export class AggiungiComponent implements OnInit {
  titolo: string = '';
  autore: string = '';
  codice: string = '';
  @Input() archivio = new Archivio(this.servizio);
  lista = this.archivio.lista;
  errore: string = '';
  mostraAggiungi: boolean = false;

  bottoneAggiungi() {
    this.mostraAggiungi = true;
  }
  aggiungiLibro() {
    if (!this.titolo || !this.autore || !this.codice) {
      this.errore = 'Bisogna compilare tutti i campi.';
    } else {
      this.errore = '';

      this.archivio.aggiungiLibro(this.titolo, this.autore, this.codice);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();

      this.mostraAggiungi = false;
      this.titolo= '';
      this.autore = '';
      this.codice = '';
    }
  }

  constructor(private servizio: Service) {}

  ngOnInit() {}
}
