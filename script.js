class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary, role) {
    super(name, age);
    this.salary = salary;
    this.role = role;
  }
  sayHello() {
    super.sayHello();
    console.log(`My role is ${this.role}`);
  }
}

const employee = new Employee("John", 30, 40000, "Software Engineer");

console.log(employee.role);
employee.sayHello();
