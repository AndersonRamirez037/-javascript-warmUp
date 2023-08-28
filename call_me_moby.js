#!/usr/bin/node

exports.callMeMoby = function(x, theFuncion){
    for (let i = 0; i < x; i++){
        theFuncion();
    }
}