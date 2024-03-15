"use strict";
let nome = 'Luke';
let cpf = 25;
let idade = 25;
let booleano = true;
console.log(`Nome ${nome}, Idade: ${idade}`);
let lista = [1, 2, 3, 4, 5];
let lista_dois = ['l', 'k', 'm'];
lista.push(6);
console.log(lista_dois.map((n) => {
    n.toUpperCase();
}));
function soma(a, b) {
    return a + b;
}
