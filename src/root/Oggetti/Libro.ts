export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  prestito: string;

  constructor(titolo: string, autore: string, codice: string, prestito?: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;

    if(prestito) {
      this.prestito = prestito;
    } else {
      this.prestito = '';
    }
  }

  libero() {
    return this.prestito === '';
  }

  prendiInPrestito(persona: string) {
    if (this.libero()) {
      this.prestito = persona;
    }
  }

  restituisci() {
    if (!this.libero()) {
      this.prestito = '';
    }
  }
}
