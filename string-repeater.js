const prompt = require('prompt-sync')({ sigint: true });


/* Write a program that takes a string and 'repeats it' 
until the string's length is greater than or equal to 10.*/


let str = String(prompt("Enter a single word: "))

let string = ''
while(string.length<10){
    string += str
}

console.log(string);