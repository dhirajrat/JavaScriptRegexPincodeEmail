const prompt = require("prompt-sync")();

console.log("**Enter a pincode**");
let pincode = prompt("Enter a pincode: ");

let pinRegex = RegExp('^([0-9]{3})[ ]([0-9]{3}$)');

if(pinRegex.test(pincode)){
    console.log("pin is valid!");
} else { console.log("pin is invalid!");
}