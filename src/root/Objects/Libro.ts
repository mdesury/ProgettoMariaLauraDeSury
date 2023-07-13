export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  inPrestito: boolean;
  personaInPrestito: string;

  constructor(titolo: string, autore: string, codice: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;
    this.inPrestito = false;
    this.personaInPrestito = '';
  }

  prestaLibro() {
    this.inPrestito = true;
  }

  restituisciLibro() {
    this.inPrestito = false;
    this.personaInPrestito = '';
  }
}
