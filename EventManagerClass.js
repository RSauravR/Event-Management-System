import { Event } from "./EventClass.js";

export class EventManager{

    constructor(){
        this.events = [];
    }

    createEvent(name, date, location){
        let newEvent = new Event(name, date, location);
        this.events.push(newEvent);
        return newEvent;
    }

    listEvents(){
        //print all events with details
        console.log("All Events are: ");
        this.events.forEach(event => console.log(event.getDetails()));
        
    }

    findEventById(id){
        //return event object
        return this.events.find(event => event.id === id) || null;
    }

    deleteEvent(id){
        //removes event
        this.events = this.events.filter(event => event.id !== id);
    }

    updateEvent(id, newData){
        //updates event properties
    }
}