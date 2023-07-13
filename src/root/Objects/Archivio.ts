import { Libro } from "./Libro";
import { Service } from "./../service.service";

export class Archivio {
  lista: Array<Libro>;
  libriPrestati: Array<Libro>;
  servizio: Service;

  constructor(servizio: Service) {
    this.lista = new Array<Libro>();
    this.servizio = servizio;
    this.libriPrestati = [];

    this.servizio.get().subscribe((risultato) => {
      let elenco = JSON.parse(risultato);
      elenco.map((libro: any) => {
        this.aggiungiLibro(libro.titolo, libro.autore, libro.codice);
      });
    });
  }

  ricercaLibro(chiave: string) {
    return this.lista.filter((libro) => {
      return (
        libro.titolo.toLowerCase().includes(chiave.toLowerCase()) ||
        libro.autore.toLowerCase().includes(chiave.toLowerCase()) ||
        libro.codice.toLowerCase().includes(chiave.toLowerCase())
      );
    }).concat(this.libriPrestati.filter((libro) => {
      return (
        libro.titolo.toLowerCase().includes(chiave.toLowerCase()) ||
        libro.autore.toLowerCase().includes(chiave.toLowerCase()) ||
        libro.codice.toLowerCase().includes(chiave.toLowerCase())
      );
    }));
  }
  

  trovaLibro(codice: string) {
    return this.lista.filter((libro) => {
      return libro.codice === codice;
    })[0];
  }

  aggiungiLibro(titolo: string, autore: string, codice: string) {
    if (!this.trovaLibro(codice)) {
      this.lista.push(new Libro(titolo, autore, codice));
    }
  }

  rimuoviLibro(codice: string) {
    this.lista = this.lista.filter((libro) => {
      return libro.codice !== codice;
    });
  }

  getLibri() {
    return this.lista;
  }

  prestitoLibro(codice: string) {
    let libro = this.trovaLibro(codice);
    if (libro && !libro.inPrestito) {
      libro.prestaLibro();
      this.libriPrestati.push(libro);
      // Aggiorna il server con la lista modificata di libri
    }
  }
  
  

  restituisciLibro(codice: string) {
    let libro = this.trovaLibro(codice);
    if (libro) {
      libro.restituisciLibro();
      this.aggiungiLibro(libro.titolo, libro.autore, libro.codice);
      this.libriPrestati = this.libriPrestati.filter(
        (lib) => lib.codice !== codice
      );
    }
    this.servizio.set(JSON.stringify(this.lista)).subscribe();
  }

}


