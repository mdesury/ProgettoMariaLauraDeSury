import { Component } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent {
  archivio = new Archivio(this.servizio);
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraNessunLibroTrovato: boolean = false;
  mostraPulsantePrestito: boolean = false;
  mostraPulsanteRestituzione: boolean = false;
  libroSelezionato: any;
  personaInPrestito: string = '';
  mostraCampoNome: boolean = false; // Aggiunta variabile mostraCampoNome

  constructor(private servizio: Service) {}

  ricercaLibro() {
    let chiave = this.ricerca.trim();

    if (chiave === '') {
      this.risultatiRicerca = [];
      this.mostraNessunLibroTrovato = false;
      this.mostraPulsantePrestito = false;
      this.mostraPulsanteRestituzione = false;
      this.libroSelezionato = null;
      this.mostraCampoNome = false; // Resetta la visibilità del campo nome
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);

      if (this.risultatiRicerca.length === 0) {
        this.mostraNessunLibroTrovato = true;
        this.mostraPulsantePrestito = false;
        this.mostraPulsanteRestituzione = false;
        this.libroSelezionato = null;
        this.mostraCampoNome = false; // Resetta la visibilità del campo nome
      } else if (this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = !this.risultatiRicerca[0].inPrestito;
        this.mostraPulsanteRestituzione = this.risultatiRicerca[0].inPrestito;
        this.libroSelezionato = this.risultatiRicerca[0];
        this.personaInPrestito = '';
        this.mostraCampoNome = this.risultatiRicerca[0].inPrestito; // Mostra il campo nome se il libro è in prestito
      } else {
        this.mostraPulsantePrestito = false;
        this.mostraPulsanteRestituzione = false;
        this.libroSelezionato = null;
        this.personaInPrestito = '';
        this.mostraCampoNome = false; // Resetta la visibilità del campo nome
      }
    }
  }

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
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe(
      (response) => {
        console.log('Dati salvati sul server:', response);
      },
      (error) => {
        console.error('Errore durante il salvataggio dei dati sul server:', error);
      }
    );
  }
  }

