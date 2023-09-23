// Interface
class Employee {
    work() {
      // Common work logic
    }
  
    takeBreak() {
      // Common break logic
    }
  
    attendMeeting() {
      // Common meeting logic
    }
  }
  
  // Classes
  class FullTimeEmployee extends Employee {
    work() {
      console.log('Full-time employee is working.');
    }
  
    takeBreak() {
      console.log('Full-time employee is taking a break.');
    }
  
    attendMeeting() {
      console.log('Full-time employee is attending a meeting.');
    }
  }
  
  class PartTimeEmployee extends Employee {
    work() {
      console.log('Part-time employee is working.');
    }
  
    takeBreak() {
      console.log('Part-time employee is taking a break.');
    }
  
    // Part-time employees don't attend meetings, but they are forced to implement the method
    attendMeeting() {
      console.log('Part-time employee is attending a meeting.'); // This is inappropriate for part-time employees.
    }
  }
  
  // Usage
  const fullTimeEmployee = new FullTimeEmployee();
  fullTimeEmployee.work(); // Full-time employee is working.
  fullTimeEmployee.takeBreak(); // Full-time employee is taking a break.
  fullTimeEmployee.attendMeeting(); // Full-time employee is attending a meeting.
  
  const partTimeEmployee = new PartTimeEmployee();
  partTimeEmployee.work(); // Part-time employee is working.
  partTimeEmployee.takeBreak(); // Part-time employee is taking a break.
  partTimeEmployee.attendMeeting(); // Part-time employee is attending a meeting. (Inappropriate)
  