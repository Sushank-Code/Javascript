
// Objects 

const student = {
    fullName: "Sushank Lamsal",
    Marks: 90,
    printMarks: function () {                          // Here Object [key] is function name
        console.log(`Marks : ${this.Marks}`);
    }
};
// console.log(student.printMarks());

const income = {
    fullName: "Hero",
    salary() {                                        // Other method of defining func in Objects
        console.log("Salary is : 10000");
    }
};
const income2 = {
    salary() {
        console.log("Salary is : 20000");
    }
};

// By using proto , We can use  key of [student] obj with the helpof [income] obj 

income.__proto__ = student;   
income2.__proto__ = student;
// income2.__proto__ = income;

console.log(income2.printMarks());
console.log(income2["fullName"]);

console.log(income.fullName);         // Print its own if key is same
