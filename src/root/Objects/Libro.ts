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

  prendiInPrestito(persona: string) {
    if (!this.inPrestito && persona.trim() !== '') {
      this.inPrestito = true;
      this.personaInPrestito = persona;
    }
  }

  restituisci() {
    if (this.inPrestito) {
      this.inPrestito = false;
      this.personaInPrestito = '';
    }
  }
}
