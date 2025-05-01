
// Template Literals

let firstname = "Sushank";
let lastname = "Lamsal";

let prefix = "Mr";

console.log(`${prefix} . ${firstname} ${lastname}`);

// Ternery Operator

let authenticated = false;

let login = authenticated ? "Yes" : "No";     // condition ? True : False ;
console.log(login);

// Objects shorthand

let id = 1;
let title = 'Product 1';
let rating = 5;

const Product = {
    id,
    title,
    rating,
}
console.log(Product);

// Object & Array Destructuring

let employee = {
    'empname' : 'Sushank',
    'eid' : 1 ,
    'Company': 'epic game'
}
let {eid ,empname} = employee;
console.log(id,empname);

let student = ['hari','krishna'];

let [first_ele] = student;

console.log(first_ele);