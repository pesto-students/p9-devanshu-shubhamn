

//call Example
const customer = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
const customer1 = {
  firstName: "karan",
  lastName: "mehra",
};
const customer2 = {
  firstName: "hemant",
  lastName: "Sharma",
};

const customerName = customer.fullName.call(customer1);
console.log(customerName);


// apply Example
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} ${city}, ${country}`;
  },
};

const person1 = {
  firstName: "shub",
  lastName: "nar",
};

person.fullName.apply(person1, ["delhi", "India"]);


//bind Example
const sum = (a, b) => {
  return `${this.a} + ${this.b}`;
}
const sumA = sum.bind({ a: 10, b: 20 });
console.log(sumA());


