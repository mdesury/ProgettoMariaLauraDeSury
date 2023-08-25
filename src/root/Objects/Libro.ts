export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  personaInPrestito: string;

  constructor(titolo: string, autore: string, codice: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;
    this.personaInPrestito = '';
  }

  libero() {
    return this.personaInPrestito === '';
  }

  prendiInPrestito(persona: string) {
    this.personaInPrestito = persona;
  }

  restituisci() {
    this.personaInPrestito = '';
  }
}
