const prompt = require('prompt-sync')({ sigint: true });

/* Write a program that prompts the user for two numberx, x and y. 
The program should add one to x until it is divisble by y. */


let num1 = Number(prompt("Enter X: "))
let num2 = Number(prompt("Enter Y: "))

while (num1 % num2 !== 0){
    num1 ++;
    console.log(num1);
}

console.log(num1);
console.log(`The sum ${num1} is divisible by ${num2}`);