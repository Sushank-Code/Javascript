
 // Array are Mutable but strings are not 

let marks = [97, 82, 75, 84];       
console.log(marks);
console.log(marks.length);

console.log(marks[0]);
console.log(marks.slice(0, 3));        // slicing

marks[0] = 90;               // Updating
console.log(marks);

// looping in array 

// for(let i = 0 ; i < marks.length;i++){
//     console.log(marks[i]);
// }

// in and of loop

// for(let i in marks){
//     console.log(i);
//     console.log(marks[i]);
// }


// Question ( Finding average)

let marks_s = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i of marks_s) {
    sum += i;
}
let avg = sum / marks_s.length;
console.log(avg);

// Question
let price = [250, 645, 300, 900, 50];
let discoutPrice = [];

for (let i of price) {
    let i_price = (i * 10) / 100;
    i = i - i_price;
    discoutPrice.push(i);
}
console.log(discoutPrice);