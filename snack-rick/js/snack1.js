/**
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri,
 * creiamo un nuovo elemento p e lo stampiamo nell'div rosso  se è un numero dispari
 * e nel div verde se è un numero pari.
 */

 const array = [1,33,55,64,33,22,10,44];
 const greenDiv = document.getElementById('green');
 const redDiv = document.getElementById('red');

 greenDiv.style.color = 'green';
 redDiv.style.color = 'red';

 function createP(num){
    const pElem = document.createElement('p');
    pElem.innerHTML = 'Lorem dolor sit bla bla bla : ' + num;
    return pElem;
 }

 for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
        //pari
        greenDiv.append(createP(array[i]));
    }
    else{
        redDiv.append(createP(array[i]));
    }
 }
 