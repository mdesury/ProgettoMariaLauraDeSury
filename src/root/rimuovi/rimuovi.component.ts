import { Component, Input, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Libro } from './../Objects/Libro';
import {Service} from "./../service.service";

@Component({
  selector: 'app-rimuovi',
  templateUrl: './rimuovi.component.html',
  styleUrls: ['./rimuovi.component.css']
})
export class RimuoviComponent implements OnInit {
  archivio = new Archivio(this.servizio);
  lista: any[] = [];

  rimuoviLibro(codice: string) {

    let elimina = document.getElementById('codice') as HTMLInputElement;
    this.archivio.rimuoviLibro(elimina.value);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }

  constructor(private servizio: Service) { }

  ngOnInit() {
   
  }
}
