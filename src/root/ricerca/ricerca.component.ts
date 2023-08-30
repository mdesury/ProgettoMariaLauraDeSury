
import {Component, Input, OnChanges, EventEmitter, SimpleChanges} from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";
import { Libro } from './../Objects/Libro';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnChanges{
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraPulsantePrestito: boolean = false; // Aggiungi questa variabile
  libroTarget: Libro = new Libro('', '', '');
  libero = false;
  @Input() archivio = new Archivio(this.servizio);

  constructor(private servizio: Service) {
    // this.archivio = new Archivio(this.servizio);
  }

  ricercaLibro(archivio = this.archivio) {

    if(archivio){
      this.archivio = archivio;
    }

    this.archivio.aggiornaLista();
    let chiave = this.ricerca.trim();

    if (chiave === '') {
      this.risultatiRicerca = [];
      this.mostraPulsantePrestito = false; // Resetta la variabile quando non ci sono risultati
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
      this.mostraPulsantePrestito = this.risultatiRicerca.length === 1; // Imposta a true quando c'è un solo risultato
      if(this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = true;
        this.libroTarget = this.risultatiRicerca[0];
      }
    }
    console.log(this.risultatiRicerca);
    this.libero = this.libroTarget.libero();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.libero = this.libroTarget.libero();
  }

}
