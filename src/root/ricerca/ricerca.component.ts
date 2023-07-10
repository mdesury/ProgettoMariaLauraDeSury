import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import {Service} from "./../service.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {

  archivio = new Archivio(this.servizio);
  

  ricercaLibro() {
    let chiave = document.getElementById('trovaLibro') as HTMLInputElement;
    

    // Implementazione del metodo trovaLibro()
    this.archivio.ricercaLibro(chiave.value);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }

  constructor(private servizio: Service) {}

  ngOnInit() {

  }
}
