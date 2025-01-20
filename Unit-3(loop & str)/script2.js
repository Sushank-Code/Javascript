let str = " Sushank Lamsal";
let str2 = "Hello & Hi";

// document.write(str.length);
console.log(str.length);
console.log(str[0]);       // indexing

// Template Literals  or string interpolation

let obj ={
    item : "Pen",
    price : 10
};

let output = `The cost of ${obj["item"]} is ${obj["price"]} rupees`;
console.log(output);

console.log("Sushank\nLamsal");  // \t

// String Methods
console.log(str.toUpperCase());       // Upper Case
console.log(str2.toLowerCase());      // Lower Case
console.log(str.trim());              // Remove White spaces in start & end not in (middle)

console.log(str.slice(0,5));          // String slicing

let join = str.concat(str2);
console.log(join);

let join2 = str + str2;              // Concatinating using + sign
console.log(join2);

let re = str.replace("Lamsal","Hero");
console.log(re);

let reall= str.replaceAll("a","o");  // For replacing all Values
console.log(reall)

console.log(str.charAt(10));      // searching character

console.log(str2.split("&"));


