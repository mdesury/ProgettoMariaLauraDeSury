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

    aggiungiLibro() {
      let Ititolo = document.getElementById('titolo') as HTMLInputElement;
      let Iautore = document.getElementById('autore') as HTMLInputElement;
      let Icodice = document.getElementById('codice') as HTMLInputElement;

      this.archivio.aggiungiLibro(Ititolo.value, Iautore.value, Icodice.value);
      console.log(this.archivio.lista);
  }

  constructor() { }

  ngOnInit() {
   
  }

}