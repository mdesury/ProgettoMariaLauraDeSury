import { Component, OnInit } from '@angular/core';
import { Archivio } from './Oggetti/Archivio';
import {Service} from "./service.service";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
 
  
  archivio = new Archivio(this.servizio);
  lista = this.archivio.lista;

  constructor(private servizio: Service) { }

  ngOnInit() {

  }

}
