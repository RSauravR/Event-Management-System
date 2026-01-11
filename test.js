import { Event } from "./EventClass.js";

let meeting1 = new Event("Standup Meeting", new Date("2026-01-31"), "Bengaluru");

let details = meeting1.getDetails();
console.log(details);

meeting1.addParticipants("Saurav");
let details1 = meeting1.getDetails();
console.log(details1);

meeting1.removeParticipants("Ram");
let details2 = meeting1.getDetails();
console.log(details2);