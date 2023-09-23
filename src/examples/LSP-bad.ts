class Vehicle {
    accelerate() {
      console.log('Vehicle is accelerating.');
    }
  }
  
  class Bicycle extends Vehicle {
    // Bicycles cannot accelerate in the same way as other vehicles, so we override the accelerate method
    accelerate() {
      console.log('Bicycle is pedaling.');
    }
  
    ringBell() {
      console.log('Bicycle is ringing the bell.');
    }
  }
  
  // Usage
  const vehicle = new Bicycle();
  vehicle.accelerate(); // This violates LSP because a bicycle accelerates differently.
  vehicle.ringBell(); // A bicycle can ring the bell.
  