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
  personaInPrestito: string = '';
  archivio = new Archivio(this.servizio);
  codice: string = '';
  errore: string = '';

  constructor(private servizio: Service) {}

  prendiInPrestito() {
    if (this.personaInPrestito != '' && this.libroInPrestito) {
      this.codice = this.archivio.trovaLibro(this.libroInPrestito.codice).codice;

      if (this.archivio.trovaLibro(this.libroInPrestito.codice).libero()) {
        console.log(this.archivio.trovaLibro(this.libroInPrestito.codice));
        console.log(
          this.archivio.trovaLibro(this.libroInPrestito.codice).libero()
        );
        this.archivio.prendiInPrestito(this.codice, this.personaInPrestito);
        this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
        console.log('Libro in prestito');

      } else {
        console.log('Libro già in prestito');
      }

    } else {
      this.errore = 'Devi compilare tutti i campi.';
      console.log('Errore: libro inesistente. ' + this.libroInPrestito);
    }
  }

  restituisciLibro() {
    if (this.personaInPrestito != '' && this.libroInPrestito) {
      this.codice = this.archivio.trovaLibro(this.libroInPrestito.codice).codice;
  
      if (!this.archivio.trovaLibro(this.libroInPrestito.codice).libero()) {
        console.log(this.archivio.trovaLibro(this.libroInPrestito.codice));
        console.log(
          this.archivio.trovaLibro(this.libroInPrestito.codice).libero()
        );
        this.archivio.restituisci(this.codice);
        this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
        console.log('Libro restituito');

  
}
    }
  }
}