import { Component, OnInit } from '@angular/core';
import { Archivio } from './Objects/Archivio';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
 
  archivio = new Archivio();
  lista = this.archivio.lista;

  constructor() { }

  ngOnInit() {

  }

}
