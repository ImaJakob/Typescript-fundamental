// Step 1: Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Step 2: Implement the Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  // Step 3: Constructor to initialize properties
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Step 4: Implement the start method
  start(): void {
    console.log("Car engine started");
  }
}

// Step 5: Create an instance and call the start method
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`);
myCar.start();
