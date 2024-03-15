"use strict";
// Escreva uma função em TypeScript que receba um array de números e retorne um
// novo array contendo apenas números pares. Use type annotation para a função e
// seus parâmetros.
function arrayEvenNumbers(array) {
    let newArray = [];
    array.forEach((i) => {
        if (i % 2 == 0) {
            newArray.push(i);
        }
    });
    return newArray;
}
function arrayEvenNumbersTop(array) {
    return array.filter(i => i % 2 == 0);
}
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const b = arrayEvenNumbers(a);
console.log(b);
