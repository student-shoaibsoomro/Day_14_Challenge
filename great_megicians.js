"use strict";
let megician = ['David Blaine', 'David Copperfield', 'Derren Brown', 'Penn and Teller'];
function make_great(great_Megician) {
    for (let i = 0; i < great_Megician.length; i++)
        console.log(`The great ${great_Megician[i]}`);
}
function show_megicians(megicians) {
    megician.forEach(element => {
        console.log(element);
    });
}
make_great(megician);
show_megicians(megician);
