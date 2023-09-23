// Abstraction (interface)
class Switchable {
    turnOn() {
      // To be implemented by concrete devices
    }
  
    turnOff() {
      // To be implemented by concrete devices
    }
  }
  
  // Concrete device classes
  class Bulb extends Switchable {
    turnOn() {
      console.log('Bulb is ON.');
    }
  
    turnOff() {
      console.log('Bulb is OFF.');
    }
  }
  
  class LED extends Switchable {
    turnOn() {
      console.log('LED is ON.');
    }
  
    turnOff() {
      console.log('LED is OFF.');
    }
  }
  
  // High-level class
  class LightSwitch {
    device: any;
    constructor(device) {
      this.device = device;
    }
  
    turnOn() {
      this.device.turnOn(); // LightSwitch depends on the abstraction (interface), not specific device implementations.
    }
  
    turnOff() {
      this.device.turnOff(); // LightSwitch depends on the abstraction (interface), not specific device implementations.
    }
  }
  
  // Usage
  const bulb = new Bulb();
  const bulbSwitch = new LightSwitch(bulb);
  bulbSwitch.turnOn(); // Bulb is ON.
  
  const led = new LED();
  const ledSwitch = new LightSwitch(led);
  ledSwitch.turnOn(); // LED is ON.
  