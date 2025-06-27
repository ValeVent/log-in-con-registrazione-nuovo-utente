Sistema di Autenticazione e Gestione Utenti

Questo progetto è un semplice sistema di autenticazione e gestione utenti realizzato con HTML, CSS e JavaScript puro. Offre funzionalità di login, registrazione di nuovi utenti e una rudimentale gestione dei dati (CRUD - Create, Read, Update, Delete) tramite localStorage.


Descrizione Approfondita del Progetto

L'applicazione si articola su tre pagine principali:

- Pagina di Login (index.html): Permette agli utenti di accedere con credenziali predefinite o registrate.

- Pagina di Registrazione Utente (registrazione-utente.html): Consente la creazione di nuovi account e mostra una tabella con tutti gli utenti registrati, offrendo funzionalità di modifica e cancellazione.

- Home Page (home_page.html): Una pagina di benvenuto visualizzata dopo un login di successo, con opzioni per tornare al login, registrare un nuovo utente o chiudere l'applicazione.


Il sistema memorizza i dati degli utenti nel localStorage del browser, garantendo una persistenza locale dei dati tra le sessioni. Vengono incluse credenziali predefinite per facilitare i test.


Credenziali di Accesso Predefinite

Per accedere rapidamente e testare le funzionalità, puoi utilizzare le seguenti credenziali di default:

Username: Valentina

Password: ciaociao123


O in alternativa:

Username: Maurizio

Password: ciaociao123


Tecnologie Utilizzate

- HTML5: Struttura di tutte e tre le pagine web (index.html, home_page.html, registrazione-utente.html).

- CSS3: Styling completo dell'interfaccia utente, dei form, dei pulsanti e della tabella di gestione utenti, garantendo un aspetto coerente.

- JavaScript: Logica interattiva per:

  - Gestione dell'autenticazione utente.

  - Funzionalità di registrazione e creazione di nuovi utenti.

  - Operazioni CRUD (Create, Read, Update, Delete) sui dati utente memorizzati in localStorage.

  - Navigazione tra le diverse pagine dell'applicazione.

  - Gestione dinamica della tabella degli utenti.

- localStorage API: Utilizzata per la persistenza locale dei dati degli utenti nel browser.


Funzionalità Principali

- Login Utente: Verifica le credenziali inserite e reindirizza alla home page in caso di successo.

- Registrazione Nuovo Utente: Permette agli utenti di creare un nuovo account inserendo nome, email e password.

- Gestione Utenti (CRUD):

  - Visualizzazione di tutti gli utenti registrati in una tabella.

  - Modifica (Edit): Possibilità di aggiornare nome, email e password di un utente esistente tramite prompt.

  - Cancellazione (Delete): Rimozione di un utente dalla lista con conferma.

- Navigazione Multi-pagina: Passaggio fluido tra la pagina di login, la pagina di registrazione e la home page.

- Persistenza Dati: I dati degli utenti registrati vengono salvati localmente tramite localStorage e persistono tra le sessioni del browser.


Come Avviare il Progetto

Segui questi semplici passaggi per configurare ed eseguire il progetto localmente:


Prerequisiti

Non sono richiesti particolari prerequisiti oltre a un browser web moderno.


Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/sistema-autenticazione.git

Assicurati di sostituire 'sistema-autenticazione.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd sistema-autenticazione


Avvio dell'Applicazione

- Apri il file index.html direttamente nel tuo browser web. È la pagina di partenza per l'applicazione.

Se hai installato http-server globalmente (opzionale, per un server locale):

npm install -g http-server

http-server .

L'applicazione sarà accessibile all'indirizzo mostrato dal server (es. http://localhost:8080).


Stato del Progetto

Questo progetto è un esempio funzionale di gestione utente client-side, utile per comprendere i concetti di autenticazione base e manipolazione dei dati nel browser.


Contatti

GitHub: https://github.com/ValeVent

LinkedIn: https://www.linkedin.com/in/valentina-venturo

Sito Web: http://www.valentinaventuro.it
