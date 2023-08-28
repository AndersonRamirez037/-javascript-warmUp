#!/usr/bin/node

let dato;
if (dato = parseInt(process.argv[2])){
    console.log("My number:", dato);
} else {
    console.log("Not a number");
}