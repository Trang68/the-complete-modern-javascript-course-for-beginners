class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numberDoor){
        super(make, model, year);
        this.numberDoor = numberDoor;
    }
}

class Truck extends Vehicle{
    constructor(make, model, year, cargoCapacity){
        super(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }
}

const myCar = new Car("honda", "M3", 2020, 4);
const myTruck = new Truck("HUYNDAI", "M4", 2022, "1 ton");

console.log(myCar);
console.log(myTruck);
