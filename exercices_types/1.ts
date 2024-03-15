// Defina um type alias para um objeto representando um usuário, que deve conter
// nome, idade (opcional) e um array de habilidades (strings). Em seguida, crie um
// usuário exemplo.

type User = {
  name: string;
  age: number;
  skills: string[];
};

let user : User = {
    name: 'Luke',
    age: 18,
    skills: ['py', 'js']
}

user.skills.push('java')
