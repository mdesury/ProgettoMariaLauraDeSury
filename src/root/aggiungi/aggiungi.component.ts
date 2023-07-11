import { Component, OnInit } from '@angular/core';
import { Archivio } from './../Objects/Archivio';
import {Service} from "./../service.service";

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrls: ['./aggiungi.component.css']
})
export class AggiungiComponent implements OnInit {
  archivio = new Archivio(this.servizio);
  lista = this.archivio.lista;
  errore: string = '';

  aggiungiLibro() {
    let Ititolo = document.getElementById('titolo') as HTMLInputElement;
    let Iautore = document.getElementById('autore') as HTMLInputElement;
    let Icodice = document.getElementById('codice') as HTMLInputElement;

    if (!Ititolo.value || !Iautore.value || !Icodice.value) {
      this.errore = 'Devi compilare tutti i campi.';
    } else {
      this.errore = ''; 
      
      this.archivio.aggiungiLibro(Ititolo.value, Iautore.value, Icodice.value);
    this.servizio.set(JSON.stringify(this.archivio.lista)).subscribe();
    }
  }

  
  constructor(private servizio: Service) { }

  ngOnInit() {
   
  }
}
