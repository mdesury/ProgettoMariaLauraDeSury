export class Libro {
  titolo: string;
  autore: string;
  codice: string;
  personaInPrestito: string;

  constructor(titolo: string, autore: string, codice: string, personaInPrestito?: string) {
    this.titolo = titolo;
    this.autore = autore;
    this.codice = codice;

    if(personaInPrestito) {
      this.personaInPrestito = personaInPrestito;
    } else {
      this.personaInPrestito = '';
    }

  }

  libero() {
    // console.log(this)
    return this.personaInPrestito === '';
  }

  prendiInPrestito(persona: string) {
    if (this.libero()) {
      this.personaInPrestito = persona;
    }
  }

  restituisci() {
    if (!this.libero()) {
      this.personaInPrestito = '';
    }
  }
}
