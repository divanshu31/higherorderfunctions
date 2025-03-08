function person(name, age){
    this.name = name;
    this.age = age;

    this.displayInfo = function() {
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    };
}

const person1 = new person("Alice", 25);
const displayInfo = person1.displayInfo.bind(person1);
displayInfo();