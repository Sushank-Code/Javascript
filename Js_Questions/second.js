

// Spread Operator 

let arr = [ 1,2,3];
let arr2 = [4,5,6];

console.log(...arr,...arr2);

// Rest  Operator

function something( a , b , ...c){
    console.log(a,b,c);
}

something(1,2,3,4,5);

// String  -> object

// "a.b.c.d.e" => { a:{b:{c:{d:'e'}}} }

const str = "a.b.c.d.e";
const strarr = str.split(".");
console.log(strarr);
const obj = strarr.reduceRight((prev,curr)=>{
    return {[curr]:prev}
});
console.log(obj);