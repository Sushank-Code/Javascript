
// Inheritance Concepts

class person{
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("working");    // same name in parent & Child Class => Child class invoked
    }
}

class Engineer extends person{
    work(){
        console.log("Constructs");
    }
}

let myobj = new Engineer();
console.log(myobj.eat());
console.log(myobj.work());