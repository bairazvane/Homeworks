function Vehicle(name, color, fuel) {
  this.name = name;
  this.color = color;
  this.fuel = fuel;
}

function Car(name, color, fuel) {
  Vehicle.call(this, name, color, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);

function Moto(name, color, fuel) {
  Vehicle.call(this, name, color, fuel, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.prototype = Object.create(Vehicle.prototype);

function Highway(highway) {
  this.highway = highway;
  this.highway = [];
}

Highway.prototype = {
  add(Car, Moto) {
    this.highway.push(Car);
    this.highway.push(Moto);
  },
};

var car1 = new Car("Dacia", "negru", "diesel");
var moto1 = new Moto("Harley", "alb", "gas");

var highway = new Highway("A1");

highway.add(car1);
highway.add(moto1);

console.log(highway);
