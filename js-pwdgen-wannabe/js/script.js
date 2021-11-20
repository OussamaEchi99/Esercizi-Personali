// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


const userName = prompt('Dimmi il tuo nome?');


const userLastName = prompt('Dimmi il tuo Cognome?');


const userColor = prompt('Dimmi il tuo colore preferito?');

let password = `${userName}${userLastName}${userColor}21`;

document.getElementById('password').innerHTML = password;