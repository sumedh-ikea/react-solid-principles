// Correct Example following SRP
class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }
  
  class UserRepository {
    saveToDatabase(user) {
      // Code to save the user to a database
    }
  }
  
  class EmailService {
    sendEmail(user) {
      // Code to send an email to the user
    }
  }
  