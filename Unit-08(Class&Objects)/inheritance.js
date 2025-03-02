
// Inheritance Concepts

class person {                            // parent class 

    constructor(name) {
        console.log(` Parent : ${name}`);
    }
    eat() {
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
    work() {
        console.log("working");    // same name in parent & Child Class => Child class invoked
    }
}

class Engineer extends person {             // Child class ( child extends parent)
    constructor(name,name2) {
        super(name);                           // super helps to call constructor of parent class
        console.log(` Child : ${name2},${name}`);
    }
    work() {
        super.eat();
        console.log("Constructs");
        super.sleep();
    }
}

let myobj = new Engineer("person","Enginner");


// console.log(myobj.eat());
// console.log(myobj.work());

console.log(myobj.work());           