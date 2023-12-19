// step
// prompt: is used to take input from user
// intallation: type of Google "prompt sync"
// copy command "npm i prompt-sync"
// paste on terminal to install libarary1
// paste command on terminal to install library 2
// npm i --save-dev @types/node


// Calculator
let prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Please enter your first number..."))
let n2 = parseInt(prompt("Please enter your second number..."))
let operator = prompt("Please select your desired operatr.(+, -, /, *)")
if (operator=='+'){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1+n2}`)
}
else if (operator=='-'){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1-n2}`)
}
else if (operator=='*'){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1*n2}`)
}
else if (operator=='/'){
console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/n2}`)
}
else {
    console.log("please select correct operator.")
}
export {};