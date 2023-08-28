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
  archivio = new Archivio(this.servizio);
  codice: string = '';
  errore: string = '';


  constructor(private servizio: Service) {}

  async prendiInPrestito() {
    if (this.libroInPrestito) {
      try {
        this.codice = (await this.archivio.trovaLibro(this.libroInPrestito.codice)).codice;

        if (await this.archivio.trovaLibro(this.libroInPrestito.codice).libero()) {
          this.archivio.prendiInPrestito(this.codice, this.personaInPrestito);
          await this.servizio.set(JSON.stringify(this.archivio.lista)).toPromise();
        } else {
          // Libro già in prestito
        }
      } catch (error) {
        console.error('Errore durante il prestito:', error);
      }
    } else {
      // Gestione dell'errore
    }
  }

  async restituisciLibro() {
    if (this.libroInPrestito) {
      try {
        this.codice = (await this.archivio.trovaLibro(this.libroInPrestito.codice)).codice;

        if (!(await this.archivio.trovaLibro(this.libroInPrestito.codice).libero())) {
          this.archivio.restituisci(this.codice);
          await this.servizio.set(JSON.stringify(this.archivio.lista)).toPromise();
        }
      } catch (error) {
        console.error('Errore durante la restituzione:', error);
      }
    }
  }
}