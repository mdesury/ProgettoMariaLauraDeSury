import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Archivio } from './../Oggetti/Archivio';
import { Service } from './../service.service';
import { Libro } from './../Oggetti/Libro';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnChanges {
  risultatiRicerca: Array<any> = [];
  ricerca: string = '';
  mostraPulsantePrestito: boolean = false; 
  libroScelto: Libro = new Libro('', '', '');
  libero = false;
  @Input() archivio = new Archivio(this.servizio);

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
      if (this.risultatiRicerca.length === 1) {
        this.mostraPulsantePrestito = true;
        this.libroScelto = this.risultatiRicerca[0];
      }
    }
    //console.log(this.risultatiRicerca);
    this.libero = this.libroScelto.libero();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.libero = this.libroScelto.libero();
  }
}
