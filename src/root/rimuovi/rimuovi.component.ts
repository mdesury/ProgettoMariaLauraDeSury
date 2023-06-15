import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-rimuovi',
  templateUrl: './rimuovi.component.html',
  styleUrls: ['./rimuovi.component.css']
})
export class RimuoviComponent implements OnInit {
  archivio = new Archivio();
  lista: any[] = [];

  rimuoviLibro(codice: string) {

    let elimina = document.getElementById('codice') as HTMLInputElement;
    this.archivio.rimuoviLibro(elimina.value);
    console.log(this.archivio.lista);
  }

  constructor() { }

  ngOnInit() {
   
  }
}
