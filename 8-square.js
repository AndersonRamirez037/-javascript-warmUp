#!/usr/bin/node 

let dato;
if (dato = parseInt(process.argv[2])) {
    for (let i = 0; i < dato; i++){
        for (let j = 0; j < dato; j++){
            process.stdout.write("X");
        }
        console.log("");
    }
} else {
    console.log("Missing size");
}