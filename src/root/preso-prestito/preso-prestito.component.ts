import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Archivio} from "../Objects/Archivio";
import {Service} from "../service.service";
import {Libro} from "../Objects/Libro";

@Component({
  selector: 'app-preso-prestito',
  templateUrl: './preso-prestito.component.html',
  styleUrls: ['./preso-prestito.component.css']
})
export class PresoPrestitoComponent {


  @Input() archivio = new Archivio(this.servizio);
  @Input() libro = new Libro('','','');
  @Output() getChangeStatus = new EventEmitter<boolean>();

  constructor(private servizio:Service) {}

  prendiPrestito(){
    console.log(this.libro);
    let persona = document.getElementById('persona') as HTMLInputElement;

    if (this.archivio.trovaLibro(this.libro.codice).libero()) {
      this.archivio.prendiInPrestito(this.libro.codice, persona.value);
      this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
      this.getChangeStatus.emit(false);
    }

  }



}
