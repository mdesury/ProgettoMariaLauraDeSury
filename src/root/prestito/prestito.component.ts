import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css']
})
export class PrestitoComponent implements OnInit {
  archivio = new Archivio(this.servizio);
  mostraPulsantePrestito: boolean = false;
  mostraPulsanteRestituzione: boolean = false;
  personaInPrestito: string = '';
  mostraCampoNome: boolean = false;
  libro: any;

  prendiInPrestito(libro: any) {
    if (libro && !libro.inPrestito && libro.personaInPrestito.trim() === '') {
      this.archivio.prestitoLibro(libro.codice, this.personaInPrestito);
      libro.inPrestito = true;
      libro.personaInPrestito = this.personaInPrestito;
      this.mostraPulsantePrestito = false;
      this.mostraPulsanteRestituzione = true;
    } else {
      console.log('Il libro non può essere preso in prestito nuovamente.');
    }
  }
  
  restituisciLibro(libro: any) {
    if (libro && libro.inPrestito) {
      this.archivio.restituisciLibro(libro.codice);
      libro.inPrestito = false;
      this.mostraPulsantePrestito = true;
      this.mostraPulsanteRestituzione = false;
      this.mostraCampoNome = false; // Resetta la visibilità del campo nome dopo la restituzione del libro
    }
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }
  constructor(private servizio: Service) { }

  ngOnInit() {
  }

}