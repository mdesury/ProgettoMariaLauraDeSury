import { Component, OnInit } from '@angular/core';
import { Archivio } from './Objects/Archivio';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
 
  archivio = new Archivio();
  lista = this.archivio.lista;

  constructor() { }

  ngOnInit() {
    this.archivio.aggiungiLibro('Harry Potter', 'JK Rowling', 'ISBN123');
    this.archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBN456');
    this.archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBNN456');

    this.archivio.ricercaLibro("ss");
    this.archivio.trovaLibro('ISB456');

  }

}
