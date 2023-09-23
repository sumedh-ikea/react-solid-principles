// Incorrect Example violating SRP
class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    saveToDatabase(user) {
      // Code to save the user to a database
    }
  
    sendEmail() {
      // Code to send an email to the user
    }
  }