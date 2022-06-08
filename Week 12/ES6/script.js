class Vehicle {
  constructor(name, color, fuel) {
    this.name = name;
    this.color = color;
    this.fuel = fuel;
  }
}

class Car extends Vehicle {
  constructor(name, color, fuel, wheels) {
    super(name, color, fuel);
    this.wheels = wheels;
  }
}

class Moto extends Vehicle {
  constructor(name, color, fuel, wheels) {
    super(name, color, fuel);
    this.wheels = wheels;
  }
}

class Highway {
  constructor(highway) {
    this.highway = highway;
    this.highway = [];
  }
  add(Car, Moto) {
    this.highway.push(Car);
    this.highway.push(Moto);
  }
}

var car1 = new Car("dacia", "black", "diesel", "4");
var moto1 = new Moto("harley", "red", "gas", "2");

var highway = new Highway("A1");

highway.add(car1);
highway.add(moto1);

console.log(highway);
