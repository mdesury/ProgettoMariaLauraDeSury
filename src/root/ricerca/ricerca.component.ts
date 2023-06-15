import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {

  archivio = new Archivio();
  

  ricercaLibro() {
    console.log(this.archivio.lista);
    let chiave = document.getElementById('trovaLibro') as HTMLInputElement;

    // Implementazione del metodo trovaLibro()
    console.log(this.archivio.ricercaLibro(chiave.value));
  }

  constructor() {}

  ngOnInit() {
  }
}
