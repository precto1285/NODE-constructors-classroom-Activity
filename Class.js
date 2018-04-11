// The second constructor function is called "Class" and has the following properties within it...

//   * An array of students within the class
//   * Number of students in the class
//   * Name of the professor
//   * Room number
//   * The Student constructor function from above which adds a new student to the class

// requiring our Student module exported from student.js
var Student = require("./Student.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum){
    // this.students will hold all of our student objects
    this.student = [];
    this.profName = profName;
    this.roomNum = roomNum;
    // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
this.addStudent = function(name, favSubject, GPA) {
    this.student.push(new Student(name, favSubject, GPA));
};
// this method will tell you how many students are in the class
this.studentCount = function() {
    return this.students.length;
    };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;
