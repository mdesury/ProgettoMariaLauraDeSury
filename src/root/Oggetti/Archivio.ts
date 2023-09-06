import { Libro } from "./Libro";
import { Service } from "../service.service";

export class Archivio {
  lista: Array<Libro>;
  libriPrestati: Array<Libro>;
  servizio: Service;

  constructor(servizio: Service) {
    this.lista = new Array<Libro>();
    this.servizio = servizio;
    this.libriPrestati = [];
    

    this.servizio.get().subscribe(
      (risultato) => {
        try {
          let elenco = JSON.parse(risultato);
          elenco.map((libro: any) => {
            this.aggiungiLibro(libro.titolo, libro.autore, libro.codice, libro.prestito);
          });
        } catch (error) {
          console.error('Errore durante il caricamento del risultato:', error);
        }
      },
      (errore) => {
        console.error('Errore nella richiesta HTTP:', errore);
      }
    );
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

  aggiungiLibro(titolo: string, autore: string, codice: string, prestito?: string) {
    if (!this.trovaLibro(codice)) {
      this.lista.push(new Libro(titolo, autore, codice, prestito));
    }
  }

  rimuoviLibro(codice: string) {
    this.lista = this.lista.filter((libro) => {
      return libro.codice !== codice;
    });
  }

  prendiInPrestito(codice: string, persona: string) {
    let libro = this.trovaLibro(codice); 
    if (libro.libero()) {
      libro.prendiInPrestito(persona);
    }
  }

  restituisci(codice: string) {
    let libro = this.trovaLibro(codice);
    if (!libro.libero()) {
      libro.restituisci();
    }

  }
}



