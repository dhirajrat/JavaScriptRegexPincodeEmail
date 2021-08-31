const prompt = require("prompt-sync")();

console.log("**Enter a mail**");
let email = prompt("Enter a mail: ");

let emailRegex = RegExp('([a-zA-Z0-9./.-])+.([a-zA-Z0-9./.-])?@([a-z]{2,10})+.([a-z]{2,4})?');

if(emailRegex.test(email)){
    console.log("email is valid!");
} else { console.log("email is invalid!");
}