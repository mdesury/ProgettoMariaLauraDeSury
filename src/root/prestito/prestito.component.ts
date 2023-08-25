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


  constructor(private servizio: Service) {
    this.archivio = new Archivio(this.servizio);
  }

  prendiInPrestito() {
    if (this.libroInPrestito) {
      this.libroInPrestito.inPrestito = true;
      this.libroInPrestito.personaInPrestito = this.personaInPrestito;
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    }
  }

  restituisciLibro() {
    if (this.libroInPrestito) {
      this.libroInPrestito.inPrestito = false;
      this.libroInPrestito.personaInPrestito = '';
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    }
  }
}
