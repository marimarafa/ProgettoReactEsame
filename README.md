Questo progetto React permette di visualizzare e gestire i dati di diverse entità, come WP (Work Packages), Progetti, Docenti, Studenti, Assenze e Esami. 
L'interfaccia utente è composta da una home page con una navbar che permette di navigare tra le varie sezioni e visualizzare informazioni dinamiche da un'API locale.

Funzionalità principali:
  Visualizzazione dei dati da un'API locale (WP, Progetti, Docenti, Studenti, Assenze, Esami).
  Navigazione tramite una navbar per accedere alle diverse sezioni.
  Gestione dinamica delle tabelle con la possibilità di visualizzare e interagire con le informazioni.
  Link per la navigazione rapida tra le diverse categorie (Esami, Progetti, Assenze, ecc.).
  Stato di caricamento e gestione degli errori nella visualizzazione dei dati.
Prerequisiti:
Prima di avviare il progetto, assicurati di avere i seguenti strumenti installati nel tuo sistema:

  Node.js (Versione 14 o superiore).
  Un editor di testo come Visual Studio Code.
  npm per la gestione delle dipendenze (generalmente incluso con Node.js).
Installazione:
Clona il repository:
Apri il terminale e digita il comando per clonare il repository:
  bash
  Copia
  Modifica
  git clone https://github.com/tuo-username/progetto-react.git
Naviga nella cartella del progetto:
Spostati nella cartella del progetto appena clonato:
  bash
  Copia
  Modifica
  cd progetto-react
Installa le dipendenze:
Usa npm per installare tutte le dipendenze necessarie al progetto:
  npm install
Avvia il server di sviluppo:
Per avviare il progetto in modalità di sviluppo, esegui il comando:
  npm run dev
Questo comando avvierà il server di sviluppo e aprirà il sito nel tuo browser.

Funzionamento del Progetto
API:
  Il progetto si connette a un'API locale per ottenere i dati. Per fare in modo che l'app funzioni correttamente, assicurati che il server dell'API sia in esecuzione sulla stessa rete locale. L'API risponde alle richieste HTTP che vengono inviate dall'applicazione React.

Modifica dell'URL dell'API:
Per configurare correttamente l'API, modifica l'URL nella funzione fetchData presente nel file App.js sostituendo:
  javascript
  Copia
  Modifica
  const url = `http://localhost:5004/${table}`; (cambia 'localhost' ->  con l'IP del server locale)
Home Page e Navbar:
  La home page contiene un logo e una descrizione generale del sistema.
  La navbar consente la navigazione tra le diverse sezioni: WP, Assenze, Progetti, Docenti, Studenti, Esami.
  Le pagine contengono tabelle dinamiche che si aggiornano in base ai dati ricevuti dall'API.
Sezioni:
  WP: Visualizza l'elenco di tutti i Work Packages.
  Assenze: Gestisce le assenze registrate.
  Docenti: Visualizza l'elenco dei docenti.
  Studenti: Visualizza gli studenti.
  Progetti: Visualizza i progetti in corso.
  Esami: Controlla gli esami sostenuti dagli studenti.
Struttura del progetto:
  Il progetto è strutturato come segue:
  
  /src
  /ChiamateHttp
  /assenza.js: Componente per visualizzare le assenze
  /docente.js: Componente per visualizzare i docenti
  /studente.js: Componente per visualizzare gli studenti
  /progetto.js: Componente per visualizzare i progetti
  /wp.js: Componente per visualizzare i WP
  /esame.js: Componente per visualizzare gli esami
  /components
  /HomePage.js: Componente per la home page
  /academy.png: Immagine del logo
  App.js: Componente principale per la gestione delle rotte
  index.js: Punto di ingresso dell'app
  /public
  index.html: File HTML principale
Personalizzazione:
  Puoi facilmente estendere il progetto aggiungendo nuove funzionalità o modificando il layout e lo stile. 
  La struttura delle rotte è già configurata, e le nuove entità possono essere facilmente aggiunte alla navbar e al sistema di gestione dei dati.
