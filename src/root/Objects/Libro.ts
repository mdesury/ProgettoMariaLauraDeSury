export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  prestito: string;

  constructor(titolo:string, autore:string, codice:string, prestito: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;
    this.prestito = prestito;
  }
}
 