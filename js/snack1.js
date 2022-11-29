//Crea una funzione che accetti due argomenti, 
//e che restituisca un valore numerico randomico tra i due argomenti inclusi.

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandom(1,10));