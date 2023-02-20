// class Inheritance using ES5
function Person(name) {
  this.name = name; //initialize constructor
}

Person.prototype.PrintName = function () {
  console.log(`Person name is ${this.name}`);
};

function Teacher(name) {
  Person.call(this, name); ///required to call for constructor call of parent
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.Teach = function (subject) {
  this.subject = subject;
  return `${this.name} is now teaching ${this.subject}`;
};

const teacherParas = new Teacher("Paras");
teacherParas.PrintName();
const teachParas = teacherParas.Teach("Hindi");
console.log(teachParas);

const teacherJitesh = new Teacher("Jitesh");
teacherJitesh.PrintName();
const teachJitesh = teacherJitesh.Teach("English");
console.log(teachJitesh);
