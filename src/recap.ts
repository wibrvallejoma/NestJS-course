const myName = 'Williams';
const myAge = 12;

const addition = (a: number, b: number) => {
  return a + b;
};
addition(12, 12);

// Method 1. Explicit.
class Person {
  private age;
  private name; // Public by default.

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}`;
  }
}

// Method 2. Variables in constructor.
class PersonOther {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `my name is ${this.name}`;
  }
}

const nicholas = new Person(myAge, myName);
nicholas.getSummary();
