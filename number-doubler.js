const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter some numbers: "));

let sum = 0;

while(num <= 100){
    sum = num;
    num = (sum *= 2);
    if (sum >= 101) break; 
    
    //num = Number(prompt(`> `));
    console.log(num);
    console.log(`The sum is: ${sum} `);
}