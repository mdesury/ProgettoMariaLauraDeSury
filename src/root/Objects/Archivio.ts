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
  
  prestitoLibro(codice: string, persona: string) {
    let libro = this.trovaLibro(codice);
    if (libro) {
      if (libro.inPrestito) {
        console.log('Il libro è già stato preso in prestito.');
      } else if (libro.personaInPrestito !== '') {
        console.log('Il libro è attualmente in prestito a:', libro.personaInPrestito);
      } else {
        libro.prestaLibro();
        libro.personaInPrestito = persona;
        this.libriPrestati.push(libro);
        this.servizio.set(JSON.stringify(this.lista)).subscribe(
          (response) => {
            console.log('Dati salvati sul server:', response);
          },
          (error) => {
            console.error('Errore durante il salvataggio dei dati sul server:', error);
          }
        );
      }
    } else {
      console.log('Il libro non esiste nell\'archivio.');
    }
  }
  
    restituisciLibro(codice: string) {
      let libro = this.trovaLibro(codice);
      if (libro && libro.inPrestito) {
        libro.restituisciLibro();
        libro.personaInPrestito = '';
        this.libriPrestati = this.libriPrestati.filter((lib) => lib.codice !== codice);
        this.servizio.set(JSON.stringify(this.lista)).subscribe(
          (response) => {
            console.log('Dati salvati sul server:', response);
          },
          (error) => {
            console.error('Errore durante il salvataggio dei dati sul server:', error);
          }
        );
      }
    }
  }
  


