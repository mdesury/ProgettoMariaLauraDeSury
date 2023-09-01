import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Archivio } from '../Objects/Archivio';
import { Libro } from '../Objects/Libro';
// @ts-ignore
import { Service } from '../service.service';

@Component({
  selector: 'app-rimuovi',
  templateUrl: './rimuovi.component.html',
  styleUrls: ['./rimuovi.component.css'],
})
export class RimuoviComponent implements OnInit {
  @Input() archivio = new Archivio(this.servizio);
  @Input() libro: Libro | undefined; // Riceve l'oggetto Libro o undefined
  @Output() changeArchivio = new EventEmitter<any>();
  risultatiRicerca: any[] = [];

  rimuoviLibro(libro: Libro) {
    this.archivio.rimuoviLibro(libro.codice);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    this.changeArchivio.emit();
  }

  constructor(private servizio: Service) {}

  ngOnInit() {}
}
