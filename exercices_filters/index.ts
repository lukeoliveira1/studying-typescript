interface Usuario {
  id: number;
  name: string;
  age: number;
  active: boolean;
}

const users: Usuario[] = [
  { id: 1, name: "João", age: 30, active: true },
  { id: 2, name: "Maria", age: 25, active: false },
  { id: 3, name: "José", age: 35, active: true },
];

// b
const usersActive = users.filter((user) => user.active == true);
console.log("b: ", usersActive);

// c
const usersMoreOlderThan25 = users.filter((user) => user.age > 25);
console.log("c: ", usersMoreOlderThan25);

// d
const usersJustName = users.map((user) => user.name);
console.log("d: ", usersJustName);

// e
const usersAgeMoreOne = users.map((user) => ({ ...user, age: user.age + 1 }));
console.log("e: ", usersAgeMoreOne);

// f
console.log("f");
users.forEach((user) => {
  console.log(user.name, " ", user.active);
});

// g
const usersTotalAge = users.reduce((total, user) => total + user.age, 0);
console.log("g: ", usersTotalAge);

// h
const usersTotalActive = users.reduce((total, user) => {
  if (user.active) {
    return total + 1;
  }
  return total;
}, 0);
console.log("h: ", usersTotalActive);

// i
const userFindJoao = users.find((user) => user.name === "João");
console.log("i: ", userFindJoao);

// j
const userFindUserInactive = users.find((user) => !user.active);
console.log("j: ", userFindUserInactive);
