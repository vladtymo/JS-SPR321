// let / const
console.log(number); // undefined
var number = 10;
var number = 20;
console.log("Numbers:", number);

// with [let]
//console.log(koef);    // error
let koef = 10;
//let koef = 20;        // error
console.log("Koef:", koef);

// ------------- destructuring
let colors = ['red', "yellow", "blue", "green", "cyan"];

// let firstColor = colors[0];
// let secondColor = colors[1];
// let accentColor = colors[4];

let [fC, sC, , , aC] = colors;

console.log("First: ", fC);
console.log("Second: ", sC);
console.log("Accent: ", aC);

let user = {
    id: 1001,
    login: "super_programmer",
    email: "bla@gmail.com",
    age: 22
};

let { id: code, email } = user;

//let code = user.id;

console.log("ID: ", code);
console.log("Email: ", email);

let admin = {
    // ...spread
    ...user,
    age: 30,     // set new value
    name: "root" // add new property
}

console.log("Admin:", admin);