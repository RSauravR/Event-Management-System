import { EventManager } from "./EventManagerClass.js";

let newMananger = new EventManager();
newMananger.createEvent("Standup Meeting", new Date("2026-02-10"), "Bangalore");
newMananger.createEvent ("Workshop", new Date("2026-03-05"), "Delhi");

console.log(newMananger.events);
newMananger.listEvents();
