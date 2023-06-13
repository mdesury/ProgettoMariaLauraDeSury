import { Libro } from './Objects/Libro';
import { Archivio } from './Objects/Archivio';

// Import stylesheets
import './style.css';


// visualizzazione per la console //

const archivio = new Archivio();


archivio.aggiungiLibro('Harry Potter', 'JK Rowling', 'ISBN123');
archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISBN456');
archivio.aggiungiLibro('Il Signore degli Anelli', 'J.R.R. Tolkien', 'ISB456');

console.log("Trovato")
console.log(archivio.ricercaLibro("s"));

console.log(archivio.lista);

console.log(archivio.trovaLibro('ISB456'));

console.log('Lista libri dopo rimozione:', archivio.rimuoviLibro('ISB456'), archivio.lista);
console.log("Trovato")
console.log(archivio.ricercaLibro("s"));
