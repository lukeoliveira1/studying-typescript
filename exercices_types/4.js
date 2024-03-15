"use strict";
// Utilize Union Types para criar uma função que aceite tanto string quanto number
// como argumento e retorne o comprimento da string ou o valor ao quadrado se for um
// número.
const myFunction = (num) => {
    if (typeof num === "string") {
        return num.length;
    }
    else {
        return num * num;
    }
};
