import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Service} from "../service.service";
import {Archivio} from "../Oggetti/Archivio";
import {Libro} from "../Oggetti/Libro";

@Component({
  selector: 'app-restituisci',
  templateUrl: './restituisci.component.html',
  styleUrls: ['./restituisci.component.css']
})
export class RestituisciComponent {

  @Input() archivio = new Archivio(this.servizio);
  @Input() libro = new Libro('','','');
  @Output() getChangeStatus = new EventEmitter<boolean>();

  constructor(private servizio:Service) {
  }

  libero(){

    this.archivio.restituisci(this.libro.codice);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    this.getChangeStatus.emit(true);

  }

}
