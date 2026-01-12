import { Event } from "./EventClass";

export class EventManager{
    createEvent(name, date, location){
        let newEvent = new Event(name, date, location);
        return newEvent;
    }

    listEvents(){
        //print all events with details
    }

    findEventById(id){
        //return event object       
    }

    deleteEvent(id){
        //removes event 
    }

    updateEvent(id, newData){
        //updates event properties
    }
}