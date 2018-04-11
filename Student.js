// The first constructor function is called "Student" and has the following properties within it...

//   * Name of the student
//   * Favorite subject
//   * Current GPA

// constructor function for creating student objects
var Student = function(name, favSubject, GPA){
    this.name = name;
    this.favSubject = favSubject;
    this.GPA = GPA;
};

// exporting our Student constructor
module.exports = Student;