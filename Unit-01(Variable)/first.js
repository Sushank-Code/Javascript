

console.log("Hello World");
console.log("Sushank Lamsal");

fullname = "Sushank Lamsal";
price = 99.99;
x = null;
y = undefined;
bool_x = true;    // bolean
fullName = "Harry Bhai"          //  Camel Case

console.log(fullname);

// declaring variable

let age = 25;
age = 50;  // Updating    ( best approach )  ( Block Scope)   cannot be re-declared
console.log(age);

const pi = 3.14;    // Cannont be changed or updated ( Block Scope)
console.log(pi);

var c_name = "Grey";
c_name = "Green";
console.log(c_name);      // Var can be re-declared and Updated ( Global Scope)

console.log(typeof (y));

let x_num = BigInt("1234567");
console.log(x_num);

let y_num = Symbol(25);
console.log(y_num);

// Objects

const student = {
    Name_x: "Mr x",
    age: 25,
    profession: "Cleaner",
    isProfessional: true
};

console.log(student);
console.log(student["age"]);              // use     
console.log(student.age);                // Other Method

student.age = student.age + 1;
console.log(student.age);