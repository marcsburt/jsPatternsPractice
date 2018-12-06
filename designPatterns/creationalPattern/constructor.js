// define objects;
var instance = {};

var instance = Object.create(Object.prototype);

var instance = new Object();

// add properties to objects;

instance.key = "A keys value";

instance["key"] = "Key Value";

Object.defineProperty(instance, "key", {
  value: "A keys value",
  writable: false,
  enumerable: true,
  configurable: true
});

Object.defineProperty(instance, "key", {
  value: "A keys value",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperties(instance, {
  firstKey: {
    value: "First key's value",
    writable: true
  },
  secondKey: {
    value: "Second key's value",
    writable: false
  }
});

// Object creation through the "new" keyword

function Person(name, age, isDev) {
  this.name = name;
  this.age = age;
  this.isDev = isDev;

  this.writesCode = function() {
    console.log(
      this.isDev
        ? "This person does write code"
        : "This person doesn't write code"
    );
  };
}

var person1 = new Person("Marc Burt", 31, true);
var person2 = new Person("Marc Burt", 20, false);
person1.writesCode();

// prototype extension
Person.prototype.protoWritesCode = function() {
  console.log(
    this.isDev
      ? "This person does write code"
      : "This person doesn't write code"
  );
};

person2.protoWritesCode();
