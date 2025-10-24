require('dotenv').config();

const cowsay = require("cowsay");

const name = process.env.NAME;
const campus = process.env.CAMPUS;

const message = `Nom: ${name}\nCampus: ${campus}`;

console.log(cowsay.say({
    text : message,
    e : "oO",
    T : "U "
}));