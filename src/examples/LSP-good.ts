class Vehicle {
    accelerate() {
      console.log('Vehicle is accelerating.');
    }
  }
  
  class Bicycle extends Vehicle {
    ringBell() {
      console.log('Bicycle is ringing the bell.');
    }
  }
  
  // Usage
  const vehicle = new Vehicle();
  vehicle.accelerate(); // Vehicle is accelerating.
  
  const bicycle = new Bicycle();
  bicycle.accelerate(); // Vehicle is accelerating. (Inherited behavior)
  bicycle.ringBell(); // Bicycle is ringing the bell.
  