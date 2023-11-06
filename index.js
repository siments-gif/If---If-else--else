let x = 0;

if (x > 10) {
  console.log("Tallet er større enn 10");
} else if (x >= 0 && x <= 9) {
  console.log("Tallet er mindre enn 10");
} else if (x == 10) {
  console.log("Tallet er 10");
} else if (x < 0) {
  console.log("Use a positiv number");
} else if (typeof x == "string") {
  console.log("This should be a number");
} else if (typeof x == "undefined") {
  console.log("Variable need to be defined");
} else {
  console.log("Something is missing");
}

let y = 0;

if (y > 0) {
  console.log("This number is positive");
} else if (y < 0) {
  console.log("This number is negative");
} else if (y == null) {
  console.log("No number is selected ");
} else if (y == 0) {
  console.log("Number is 0");
}

const fruits = ["eple", "appelsin", "banan"];
const condition = ["molded", "fresh"];

console.log(fruits[0], "is", condition[0]);
console.log(fruits[1], "is", condition[1]);

const name = ["Ben", "Simon", "Matteo", "Luna"];
const phone = ["46471518", "67283982", "82715729"];
const origin = ["Norway", "Korea", "Italy", "Spain", "France", "Germany"];

function showMessage(name, phone) {
  console.log("hei, my name is " + name[0] + " and my number is " + phone[0]);
}

showMessage(name, phone);

console.log(
  "Name:",
  name[3],
  "/",
  "Phone:",
  phone[0],
  "/",
  "Origin:",
  origin[3]
);
let temp;

if (temp == 0) {
  console.log("Det er iskaldt");
} else if ((temp >= 0 && temp <= 20) || temp < 0) {
  console.log("Det er kjølig");
} else if (
  typeof temp == "string" ||
  typeof temp == "undefined" ||
  typeof temp == "symbol"
) {
  console.log("Type a tempature");
} else {
  console.log("Det er varmt");
}

let a = 8;
let b = 8;

if (a > 5) {
  console.log("A er større enn 5");
}
if (b < 10) {
  console.log("B er mindre enn 10");
}
if (a > 5 && b < 10) {
  console.log("Begge betingelsene er sanne");
}
if (a < 5 && b > 10) {
  console.log("Begge er feil");
}

let time = 1;

switch (time) {
  case 0:
    console.log("It's 1 AM");
    break;
  case 1:
    console.log("It's 2 AM");
    break;
  case 2:
    console.log("It's 3 AM");
    break;
  case 3:
    console.log("It's 4 AM");
    break;
  default:
    console.log("Cant find a case for statement");
}
