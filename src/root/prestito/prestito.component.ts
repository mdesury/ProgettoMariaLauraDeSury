import { Component, Input } from '@angular/core';
import { Service } from './../service.service';
import { Libro } from './../Objects/Libro';
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css'],
})
export class PrestitoComponent {
  @Input() libroInPrestito: Libro | undefined;
  @Input() libroTargetLibero: boolean = false;
  personaInPrestito: string = '';
  @Input() archivio = new Archivio(this.servizio);
  codice: string = '';
  errore: string = '';

  constructor(private servizio: Service) {}

  prendiInPrestito() {
    if (this.libroInPrestito) {
      this.codice = this.archivio.trovaLibro(this.libroInPrestito.codice).codice;

      if (this.archivio.trovaLibro(this.libroInPrestito.codice).libero()) {
        this.archivio.prendiInPrestito(this.codice, this.personaInPrestito);
        this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
      }
    }
  }

  restituisciLibro() {
    if (this.libroInPrestito) {
      this.codice = this.archivio.trovaLibro(this.libroInPrestito.codice).codice;

      if (!this.archivio.trovaLibro(this.libroInPrestito.codice).libero()) {
        this.archivio.restituisci(this.codice);
        this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
      }
    }
  }
}
