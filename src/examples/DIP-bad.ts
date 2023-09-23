class Bulb {
    turnOn() {
      console.log('Bulb is ON.');
    }
  
    turnOff() {
      console.log('Bulb is OFF.');
    }
  }
  
  class LED {
    turnOn() {
      console.log('LED is Switch on.');
    }
  
    turnOff() {
      console.log('LED is OFF.');
    }
  }
  
  class LightSwitch {
    constructor(device) {
      this.device = device;
    }
  
    turnOn() {
      this.device.turnOn(); // Violates DIP, as LightSwitch depends on specific device implementations.
    }
  
    turnOff() {
      this.device.turnOff(); // Violates DIP, as LightSwitch depends on specific device implementations.
    }
  }
  
  // Usage
  const bulb = new Bulb();
  const bulbSwitch = new LightSwitch(bulb);
  bulbSwitch.turnOn(); // Bulb is ON.
  
  const led = new LED();
  const ledSwitch = new LightSwitch(led);
  ledSwitch.turnOn(); // LED is ON.
  