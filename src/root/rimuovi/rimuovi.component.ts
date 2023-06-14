import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-rimuovi',
  templateUrl: './rimuovi.component.html',
  styleUrls: ['./rimuovi.component.css']
})
export class RimuoviComponent implements OnInit {
  archivio = new Archivio();

  rimuoviLibro() {

    let elimina = document.getElementById('codice') as HTMLInputElement;
    this.archivio.rimuoviLibro(elimina.value);
    console.log(this.archivio.lista);
  }

  constructor() { }

  ngOnInit() {
    this.archivio.aggiungiLibro('Harry Potter', 'JK Rowling', 'ISBN123');
    this.archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBN456');
    this.archivio.aggiungiLibro('Il Codice Da Vinci', 'Dan Brown', 'ISBN789');
  }
}
