export class Event {
    constructor(name, date, location){
        this.id = crypto.randomUUID();
        this.name = name;
        this.date = date;
        this.location = location;
        this.participants = ["Ram", "sham", "vam"];
    }

    addParticipants(name){
        this.participants.push(name);
    }

    removeParticipants(name){
        this.participants = this.participants.filter((participant) => participant !== name)
    }

    getDetails(){
        return `Name: ${this.name}
        ID: ${this.id}
        Date: ${this.date.toDateString()}
        Location: ${this.location}
        Attendees: ${this.participants.length}
        Participants: ${this.participants}`
    }
}