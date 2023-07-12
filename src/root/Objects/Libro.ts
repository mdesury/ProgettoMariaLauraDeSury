export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  inPrestito: boolean;

  constructor(titolo:string, autore:string, codice:string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;
    this.inPrestito = false;
  }

  prestaLibro() {
    this.inPrestito = true;
  }

  restituisciLibro() {
    this.inPrestito = false;
  }
}
 