"use strict";
const pessoas = [
    { name: "João", age: 18, active: false },
    { name: "Maria", age: 20, active: true },
    { name: "Antônio", age: 30, active: false },
    { name: "Maria", age: 38, active: true },
];
const pessoasFilter = pessoas.filter((pessoa) => pessoa.age > 20); // monta um novo array com os filtrados
console.log(pessoasFilter);
const pessoasMap = pessoas.map((p) => (p.active ? (p.age = p.age + 1) : p.age));
console.log(pessoasMap);
const pessoasMap2 = pessoas.map((p) => {
    //  para alterar algum atributo dos objetos
    if (p.active) {
        return Object.assign(Object.assign({}, p), { age: p.age + 1 }); //...p retorna todo o objeto normalmente
    }
    else {
    }
    return p;
});
console.log(pessoasMap2);
const pessoasReduceValorTotal = pessoas.reduce((total, p) => total + p.age, 0); // total começa de 0
console.log(`valor total das idades ${pessoasReduceValorTotal}`);
const pessoasFind = pessoas.find((p) => p.age > 30); // só retorna um, o primeiro que encontra
console.log(pessoasFind);
const pessoasForEach = pessoas.forEach((p) => p.age + 2);
console.log(pessoasForEach);
