let num1 = 12;
let num2 = 12;

function add(n1, n2) {
    let sum = n1 + n2;
    console.log(sum);
    // return sum;
}

// let result = add(num1,num2);      // Return ( store on new variable)
// console.log(result);
add(num1, num2);

// arrow function

const arrowsum = (a, b) => {
    console.log(a + b);
};
arrowsum(3, 2);

let arrowmul = (x, y) => {
    console.log(x * y);
};
arrowmul(3, 2);

// Counting no of Vowel in string 

let str = "AEIOU";

let checkVowel = (input_str) => {
    let check = 0;
    for (let i of input_str.toLowerCase()) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            check++;
        }
    }
    console.log("count:", check);
};
checkVowel(str);

// for each  ( Only be used for array )  also knows as higher order function

let arr = [1, 2, 3, 4, 5];

arr.forEach((element, index, arr) => {  // takes 3 argument(individual values,index & array itself)
    console.log(element, index, arr);    // can only be given 1 argument too.
});

let arr2 = [];

arr.forEach((element) => {
    element = element * element;
    arr2.push(element);
});
console.log("Original:", arr);
console.log("Squared :", arr2);


// Other Method for implementing for each methods
/*
let _suared = (element) =>{
    element = element*element;
    arr2.push(element);
};
arr.forEach(_suared);

*/