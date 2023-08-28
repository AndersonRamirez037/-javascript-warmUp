#!/usr/bin/node

if (!process.argv[2]){
    console.log(0);
} else if(!process.argv[3]){
    console.log(0);
} else{
    let Max = 0;
    let secondBiggest = 0;
    for (let i = 0; i < process.argv.length; i++){
        if (process.argv[i + 1] > Max) {
            Max = process.argv[i + 1]; 
        }
    }
    for (let j = 0; j < process.argv.length; j++){
        if (process.argv[j + 1] > secondBiggest && process.argv[j + 1] < Max){
            secondBiggest = process.argv[j + 1];
        }
    }
    console.log(secondBiggest)
}