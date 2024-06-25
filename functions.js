//CACHE DEL DOM
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btnAccedi = document.querySelector("#btn");
const btnRegistratiIndex = document.querySelector("#register-btn");

const reportTable = document.querySelector("#report-table");
const recordList = document.querySelector("#record-list");
const btnIndietro = document.querySelector("#btnIndietro");
const btnUscita = document.querySelector("#btnUscita");
const btnRegistratiHomePage = document.querySelector("#btnRegistrati");


const name = document.querySelector("#name");
const email = document.querySelector("#email");
const registrazioneUtente = document.querySelector("#registrazione-utente");


//FUNZIONI UTILI

//nella pagina INDEX:
//username e password determinate
//alert campi sbagliati o vuoti
//svuota campi
//click su "accedi" -> navigazione su altra pagina (home-page)
//click su "registrati" -> navigazione su altra pagina (registrazione-utente)

//nella pagina HOME PAGE:
//click su torna su "log-in" -> navigazione su altra pagina (index)
//click su "chiudi pagina" -> chiusura browser

//nella pagina REGISTRAZIONE UTENTE:
//click su "registrati" -> registra i dati in tabella, rimandando sulla pagina "home-page" e lì sarà visualizzata la tabella, che potrà essere cancellata con "delete"
//svuota campi


// Default user 
const defaultUser = [
    { id: 1, 
        name: 'Valentina', 
        email: 'valentina@email.com', 
        password: 'ciaociao123' 
    },
    { id: 2, 
        name: 'Maurizio', 
        email: 'maurizio@email.com', 
        password: 'ciaociao123' 
    } 
];

//funzione per svuotare i campi
function svuotaCampi() {
     document.querySelector("form").reset();
     username.focus(); 
}

//funzione per far chiudere la pagina cliccando sul bottone relativo
function closeWindow() {
    if (window.close) {
    window.close();
    }
}

function insertDefaultUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUser));
    }
}

// prende utente
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// salva utente
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// genera id
function generateId() {
    const users = getUsers();
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
}

// crea utente
function createUser(name, email, password) {
    const users = getUsers();
    const newUser = { id: generateId(), name, email, password };
    users.push(newUser);
    saveUsers(users);
    return newUser;
}

// prendi utente tramite id
function readUser(id) {
    const users = getUsers();
    return users.find(user => user.id === id);
}

// aggiorna utente
function updateUser(id, updatedData) {
    const users = getUsers();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedData };
        saveUsers(users);
        return users[index];
    }
    return null;
}

// cancella utente tramite id
function deleteUserFromStorage(id) {
    const users = getUsers();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        saveUsers(users);
        return true;
    }
    return false;
}

// Modifica utente tramite id
function updateUserInStorage(id, newProperties) {
    // Ottieni gli utenti dalla memoria locale
    let users = getUsers();

    // Trova l'indice dell'utente con l'ID specificato
    const index = users.findIndex(user => user.id === id);
    
    // Se l'utente con l'ID specificato esiste
    if (index !== -1) {
        // Crea una copia dell'utente con le nuove proprietà
        const updatedUser = { ...users[index], ...newProperties };
        
        // Aggiorna l'utente nell'array degli utenti
        users[index] = updatedUser;

        // Salva gli utenti aggiornati nella memoria locale
        saveUsers(users);

        // Restituisci true per indicare che l'aggiornamento è avvenuto con successo
        return true;
    }
    
    // Se l'utente con l'ID specificato non esiste, restituisci false
    return false;
}



// lista utenti
function listUsers() {
    return getUsers();
}
