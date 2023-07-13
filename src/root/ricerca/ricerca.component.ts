import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  archivio = new Archivio(this.servizio);
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraNessunLibroTrovato: boolean = false;
  mostraPulsantePrestito: boolean = false;
  mostraPulsanteRestituzione: boolean = false;
  libroSelezionato: any;
  personaInPrestito: string = '';

  ricercaLibro() {
    let chiave = (document.getElementById('trovaLibro') as HTMLInputElement).value;

    if (chiave.trim() === '') {
      this.risultatiRicerca = [];
      this.mostraNessunLibroTrovato = false;
      this.mostraPulsantePrestito = false;
      this.mostraPulsanteRestituzione = false;
      this.libroSelezionato = null;
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);

      if (this.risultatiRicerca.length === 0) {
        this.mostraNessunLibroTrovato = true;
        this.mostraPulsantePrestito = false;
        this.mostraPulsanteRestituzione = false;
        this.libroSelezionato = null;
      } else if (this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = !this.risultatiRicerca[0].inPrestito;
        this.mostraPulsanteRestituzione = this.risultatiRicerca[0].inPrestito;
        this.libroSelezionato = this.risultatiRicerca[0];
        this.personaInPrestito = '';
      } else {
        this.mostraPulsantePrestito = false;
        this.mostraPulsanteRestituzione = false;
        this.libroSelezionato = null;
        this.personaInPrestito = '';
      }
    }
  }

  prendiInPrestito() {
    if (this.libroSelezionato && !this.libroSelezionato.inPrestito && this.personaInPrestito.trim() !== '') {
      this.archivio.prestitoLibro(this.libroSelezionato.codice);
      this.mostraPulsantePrestito = false;
      this.mostraPulsanteRestituzione = true;
    }
  }
  

  restituisciLibro() {
    if (this.libroSelezionato && this.libroSelezionato.inPrestito) {
      this.archivio.restituisciLibro(this.libroSelezionato.codice);
      this.mostraPulsantePrestito = true;
      this.mostraPulsanteRestituzione = false;
    }
  }

  
  constructor(private servizio: Service) {}

  ngOnInit() {}
}
