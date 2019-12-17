// 3 render the error messages during login/sign up
// 4 think on what is visible when you looged in and what not
// 5 landing page is the login/signup? or you want an home page
// 6 upload foto for tour

//PROFILO//
// 6.1 upload foto for profile

//6.2 pagina profilo, se cliccchi profilo e non ci sono le info, mostra il component form dove agiungi le info altrimenti fai il render del profilo, sempre con possibilita di editing e quindi richiami il component form
// !! attenzione upload profile picture usa un temporary set state per leggere la nuova picture from cloudinary, perche  utente che  ha fatto il login ha lo smile di default nei props

// crea component con la form e tutte info da inserire
// con la route /profile che adesso passa solo foto, aggiungi le altre info (vedi user schema)
// in Profile.js crea if condition che se il rpfilo contiene foto e nome manda a profile.js (con info parziali) se non contiene foto e nome manda direttamente alla UpdateProfile.js
// se vuoi aggiornare il profilo rimanda a uploadProfile.js

//CREATE TOUR//
// 7 work on the create tour (inputs and all features)
// 8 render error message in case we crete a tour with mountain name not existing

//RENDER PAGINE E FILTRI//
// 9 pagina all your tours
// 10 pgina all tours (from all users) => all filters (regione, neve, consigliato o no etc)
// 11 pagina profilo con foto e descrizione e sommario tot tours, tot metri dislivello,
// 12 pagiona all mountains (facoltativa)
// 13 filtro most recent
// 14 render all tour info and also date

//COMMENTI//
// 13 comments su ogni tour,

// FOTO multiple //
// 14 crea carosello in pagina single Tour

// NOTIFICA//
// 15 notifica commento ricevuto

// FOTO Created by//
// 16 foto su created by e link al profilo? (profilo adesso e' privato)

//LINK ESTERNI//
// 17 link ad aineva

// to adjust
// seguendo questo processo arriviamo a un errore => signup- login- create-profile -and then edit profile directly
// in questo caso se proviamo a fare edit profile quando siamo al primissimo login, allora il submit non funziona
// the suggestion in the create tour is not working as the filter in find tour
// filtro su difficulty MS prende anche MSA
