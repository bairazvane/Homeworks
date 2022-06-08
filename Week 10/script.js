function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}

function Car(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);

function Moto(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.prototype = Object.create(Vehicle.prototype);

function Fleet(fleetName, fleetID) {
  this.fleetName = fleetName;
  this.fleetID = fleetID;
  this.fleet = [];
}

Fleet.prototype = {
  add(Vehicle) {
    this.fleet.push(Vehicle);
  },
};

var car1 = new Car("ford", "blue", "internal combustion", "diesel");
var car2 = new Car("dacia", "black", "internal combustion", "gpl");

var moto1 = new Moto("harley", "red", "combustion", "gas");
var moto2 = new Moto("vespa", "green", "combustion", "gas");

var CarsFleet = new Fleet("Cars Fleet", 101);
var MotosFleet = new Fleet("Motorcycles Fleet", 201);

CarsFleet.add(car1);
CarsFleet.add(car2);

MotosFleet.add(moto1);
MotosFleet.add(moto2);

console.log(CarsFleet);
console.log(MotosFleet);
