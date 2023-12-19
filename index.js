"use strict";
// step
// prompt: is used to take input from user
// intallation: type of Google "prompt sync"
// copy command "npm i prompt-sync"
// paste on terminal to install libarary1
// paste command on terminal to install library 2
// npm i --save-dev @types/node
Object.defineProperty(exports, "__esModule", { value: true });
// Calculator
var prompt = require('prompt-sync')();
var n1 = parseInt(prompt("Please enter your first number..."));
var n2 = parseInt(prompt("Please enter your second number..."));
var operator = prompt("Please select your desired operatr.(+, -, /, *)");
if (operator == '+') {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == '-') {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == '*') {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == '/') {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    console.log("please select correct operator.");
}
