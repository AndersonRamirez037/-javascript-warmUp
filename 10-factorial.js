#!/usr/bin/node

function factorial(num) {
    if (isNaN(num)){
        return 1;
    }
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1);
}

let number = parseInt(process.argv[2]);
const result = factorial(number);

console.log(result);