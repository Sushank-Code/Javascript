let a = 2;
let b= 3;
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a % b=",a%b);      //Modulus
console.log("a ^ b=",a**b);     //Power

// Post increment & decrement
a++;
console.log("increment of a =",a);
b--;
console.log("decrement of b =",b);

// pre increment & decrement

console.log("increment of a = ",++a);

// Assignment Operators
let x = 5;
let y = 6;

x+=5;    // x = x + 5   (-=,*=,%=,**=)
console.log("x = " ,x);

y %= 6
console.log("Y = ",y);

// Comparison Operator ( == , > , >= , < , <=, ===, !==)
let z = 10;
let p = "10";

console.log(z==p);    // Give True 
console.log(z===p);    // Give false ( Strict Version )

// Logical Operator
let u=true;   // 1
let i=false;  // 0

console.log(u&&i);   // Logical and *
console.log(u||i);   // Logical or +
console.log(!u);

// if else statement

let num = -5;

if( num % 2 == 0){
    console.log("even");
}
else if(num < 0){
    console.log("Number is negative");
}
else{
    console.log("odd");
}

let mode = "dark";
let result = mode == "dark" ? "black" : " white";
console.log(result)