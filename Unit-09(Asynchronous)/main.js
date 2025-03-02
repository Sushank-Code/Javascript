// setTimeout

console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hi");
}, 5000);                                            // 5 sec = 5000ms

console.log("Three");

// callback example (function inside function)

function add(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumcall) {
  sumcall(a, b);
}

calculator(2, 3, add);

// Nesting

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += `${j}\t`;
//   }
//   str += "\n";
// }
// console.log(str);

// callback example

function getdata(dataid,getnextdata) {
    setTimeout(() => {
        console.log("Data :" ,dataid);
        if(getnextdata){
        getnextdata();
        }
    }, 2000);
}

// This is callback Hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3)
    });
});


