var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { id: 1, name: "João", age: 30, active: true },
    { id: 2, name: "Maria", age: 25, active: false },
    { id: 3, name: "José", age: 35, active: true },
];
// b
var usersActive = users.filter(function (user) { return user.active == true; });
console.log("b: ", usersActive);
// c
var usersMoreOlderThan25 = users.filter(function (user) { return user.age > 25; });
console.log("c: ", usersMoreOlderThan25);
// d
var usersJustName = users.map(function (user) { return user.name; });
console.log("d: ", usersJustName);
// e
var usersAgeMoreOne = users.map(function (user) { return (__assign(__assign({}, user), { age: user.age + 1 })); });
console.log("e: ", usersAgeMoreOne);
// f
console.log("f");
users.forEach(function (user) {
    console.log(user.name, " ", user.active);
});
// g
var usersTotalAge = users.reduce(function (total, user) { return total + user.age; }, 0);
console.log("g: ", usersTotalAge);
// h
var usersTotalActive = users.reduce(function (total, user) {
    if (user.active) {
        return total + 1;
    }
    return total;
}, 0);
console.log("h: ", usersTotalActive);
// i
var userFindJoao = users.find(function (user) { return user.name === "João"; });
console.log("i: ", userFindJoao);
// j
var userFindUserInactive = users.find(function (user) { return !user.active; });
console.log("j: ", userFindUserInactive);
