// Class Inheritance Using ES6

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(`${this.name}`);
  }
}

class Teacher extends Person {
  Teach(subject) {
    this.subject = subject;
    console.log(`${this.name} is now teaching ${this.subject}`);
  }
}

const T1 = new Teacher("Paras");
T1.getName();
T1.Teach("Maths");
