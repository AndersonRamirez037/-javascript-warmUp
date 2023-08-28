#!/usr/bin/node 

let dato = parseInt(process.argv[2]); 
if (dato > 0){
    for (let i = 0; i < dato; i++) {
        console.log("C is fun")
    }
} else {
    console.log("Missing number of occurrences")
}