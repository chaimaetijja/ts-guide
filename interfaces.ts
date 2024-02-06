import { Interface } from "readline";

interface Vehicle {
    make: string;
    model: string;
    year?: Number;
}

function createVehicle( vehicle: Vehicle) : Vehicle {
    return vehicle;
}

interface Person {
    fisrtName: string;
    lastName: string;
    age?: number;
    email?: string;
}

function updatePerson(person:Person, updates: Partial<Person>): Person {
    return {...person, ...updates}
}

interface Circle {
    readonly centerX: number; 
    readonly centerY: number;
    readonly radius: number;
}

function moveCircle(circle: Circle, newCenterX: number, newCenterY: number): Circle {
    // error because centeX and centerY are readOnly

    // we need to create a new circle object with the updated values 
    return {...circle,centerX: newCenterX, centerY:  newCenterY}
}