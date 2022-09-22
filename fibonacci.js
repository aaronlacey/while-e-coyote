const prompt = require('prompt-sync')({ sigint: true });


/* Write a program, `fibonacci.js` that accepts a number, `n`,
 from the user and consequently logs the first `n` values in 
 the fibonacci sequence.
The fibonacci sequence starts with 0 then 1. Each subsequent 
value can be obtained by summing the previous two values: */


let n = Number(prompt("Enter a number"));

let num1 = 0;
let num2 = 1;
let i = 0;
let newNum;

while (i < n) {
    if (i === 0) {
        console.log(i);
    } else if(i === 1){
        console.log(i);
    } else{
        newNum = num1 + num2
        console.log("newNum is ", newNum);
        num1 = num2
        num2 = newNum
    }
    i++
} 

