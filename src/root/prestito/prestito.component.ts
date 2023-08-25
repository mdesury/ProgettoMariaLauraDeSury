import { Component, Input } from '@angular/core';
import { Service } from "./../service.service";
import { Libro } from './../Objects/Libro'; 
import { Archivio } from './../Objects/Archivio';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css']
})

export class PrestitoComponent {
  @Input() libroInPrestito: Libro | undefined;
  personaInPrestito: string = '';
  archivio: Archivio;
  codice: string = '';

  // Lavorare sui metodi per cui dà l'errore "ERROR
  // Error: Cannot read properties of undefined (reading 'libero')"

  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio);
    if(this.libroInPrestito) {
      this.codice = this.archivio.trovaLibro(this.libroInPrestito.codice).codice;
    }
  }

  prendiInPrestito() {
      this.archivio.prendiInPrestito(this.codice, this.personaInPrestito);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }

  restituisciLibro() {
      this.archivio.restituisci(this.codice);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
  }

  libero() {
      return this.archivio.trovaLibro(this.codice).libero();
  }

  prendiPersonaInPrestito() {
      return this.archivio.trovaLibro(this.codice).personaInPrestito;
  }

}