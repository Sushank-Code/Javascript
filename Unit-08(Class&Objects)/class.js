
// Classes

class car {
    constructor(a,b) {
        console.log("Constructor start When Obj is defined");
        this.a = a;
        this.b = b;
        console.log(a + b);
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let myobj = new car(2,3);               // Object
// let myobj2 = new car();

// myobj.setBrand("Lambo");
// myobj2.setBrand("Farari")

// console.log(myobj.start());
// console.log(myobj["brandName"]);
// console.log(myobj2["brandName"]);

