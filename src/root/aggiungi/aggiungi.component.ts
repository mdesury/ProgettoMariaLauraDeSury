import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
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
  //@Output() archivioChange = new EventEmitter<Archivio>();
  lista = this.archivio.lista;
  errore: string = '';
  messaggioAggiunta: string = '';
  mostraAggiungi: boolean = false;

  bottoneAggiungi() {
    this.mostraAggiungi = true;
  }
  aggiungiLibro() {
    if (!this.titolo || !this.autore || !this.codice) {
      this.errore = 'Devi compilare tutti i campi.';
    } else {
      this.errore = '';
      //this.archivio.aggiornaLista();

      this.archivio.aggiungiLibro(this.titolo, this.autore, this.codice);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
      //this.archivioChange.emit(this.archivio);

      this.messaggioAggiunta = 'Libro aggiunto alla libreria.';
      this.mostraAggiungi = false;
    }
  }

  constructor(private servizio: Service) {}

  ngOnInit() {}
}
