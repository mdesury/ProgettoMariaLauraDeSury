import { Component, Input } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import { Service } from "./../service.service";
import { Libro } from './../Objects/Libro'; 

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent {
  @Input() archivio = new Archivio(this.servizio);
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraPulsantePrestito: boolean = false; 
  libroTarget: Libro = new Libro('', '', '');
  libroTargetLibero: boolean = false;

  constructor(private servizio: Service) {
  }

  ricercaLibro() {
    let chiave = this.ricerca.trim();

    if (chiave === '') { 
      this.risultatiRicerca = [];
      this.mostraPulsantePrestito = false; 
    } else {
      this.risultatiRicerca = this.archivio.ricercaLibro(chiave);
      this.mostraPulsantePrestito = this.risultatiRicerca.length === 1; 
      if(this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = true;
        this.libroTarget = this.risultatiRicerca[0];
        this.libroTargetLibero = this.libroTarget.libero();
      }
    }
  }
}