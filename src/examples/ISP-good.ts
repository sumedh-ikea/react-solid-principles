// Specific interfaces
class Workable {
    work() {
      // Common work logic
    }
  
    takeBreak() {
      // Common break logic
    }
  }
  
  class AttendableMeeting {
    attendMeeting() {
      // Common meeting logic
    }
  }
  
  // Classes
  class FullTimeEmployee implements Workable, AttendableMeeting {
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
  
  class PartTimeEmployee implements Workable {
    work() {
      console.log('Part-time employee is working.');
    }
  
    takeBreak() {
      console.log('Part-time employee is taking a break.');
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
  // partTimeEmployee.attendMeeting(); // Error: Part-time employees don't attend meetings.
  