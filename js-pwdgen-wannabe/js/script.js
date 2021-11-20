// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Chiedo il nome all'utente
const userName = prompt('Dimmi il tuo nome?');

// Chiedo il cognome all'utente
const userLastName = prompt('Dimmi il tuo Cognome?');

// Chiedo il suo colore preferito all'utente
const userColor = prompt('Dimmi il tuo colore preferito?');

// Combino le tre variabili
let password = `${userName}${userLastName}${userColor}21`;

// Manipolo l'h1 con il id e stampo il messaggio
document.getElementById('password').innerHTML = password;