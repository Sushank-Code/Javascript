// Array Methods 

//push

let arr = ["pen", "copy", "pencil", "Book"];
let arr2 = [];
let arr3 = ["heloo", "hi"];

arr.push("Colorpen");
console.log(arr);

arr2.push(arr3[0]);
console.log(arr2);

// pop

let delItem = arr.pop();                    // Pop doesnot take argument or values
console.log(delItem);
console.log(arr);

// tostring

let marks = [97, 46, 76];
let items = ["potato", "burger", "meat", "mutton", "tandoori"];

console.log(marks.toString());
console.log(items.toString());

// Concat

let join = marks.concat(items);          // can concat 3 array using comma
console.log(join);

// unshift & shift  ==> same as push and pop but add and remove from start

marks.unshift(48);
console.log(marks);

marks.shift();
console.log(marks);

//slice

console.log(items.slice(-3,));

// splice

// let del = items.splice(2,2);  // remove element from 2 index and how many element to remove 2

let del = items.splice(2, 2, "masu", "Khasi"); 
// can be added item at that index which is removed

items.splice(2);                            // removing all items from 2th index
console.log(items);
