import { Component, Input } from '@angular/core';
import { Libro } from './../Objects/Libro';

@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css']
})
export class PrestitoComponent {
  @Input() libroInPrestito: Libro | undefined;
  personaInPrestito: string = '';

  prendiInPrestito() {
    if (this.libroInPrestito) {
      this.libroInPrestito.inPrestito = true;
      this.libroInPrestito.personaInPrestito = this.personaInPrestito;
      // Potresti anche voler aggiornare il tuo servizio con le modifiche
    }
  }

  restituisciLibro() {
    if (this.libroInPrestito) {
      this.libroInPrestito.inPrestito = false;
      this.libroInPrestito.personaInPrestito = '';
      // Potresti anche voler aggiornare il tuo servizio con le modifiche
    }
  }
}
