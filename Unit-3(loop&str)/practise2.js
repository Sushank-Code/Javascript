

// let fullName = prompt("Enter the full name");
// let ad1 = "@";
// let ad2 = fullName.length;

// let joining = ad1 + fullName + ad2;
// console.log(joining);


// Sorting 

// let nums1 = [2, 6, 7, 0, 0, 1];
// let nums = [2, 5, 6, 10];

// nums.sort((a, b) => {
//     return a - b;
// });
// console.log(nums);


// Other Method
// nums.sort(function (a,b) {
//    return a-b;    
// });
// console.log(nums);



// let join = nums1.concat(nums);

// join.sort((a, b) => {
//     return a - b;
// });
// console.log(join);


// reverse a string

let str = "Sushank";
let newstr = str.split("");
console.log(newstr);              // conver into array

newstr = newstr.reverse().join("");    // reverse the array and join( join into single str) with operator
console.log(newstr);

// for (let index = str.length-1; index >= 0; index--) {
//     newstr += str[index];
// }
// console.log(newstr);


// for (let i of str) {
//   newstr = i + newstr;
// }
// console.log(newstr);

// palindrome

string = "101";
let newstring = "";
if(typeof string === 'number'){
    string = string.toString();
}

const palindrome = (str) => {
    str = str.toLowerCase();
    for (let i of str) {
        newstring = i + newstring;
    }

    if(str === newstring){
        console.log("palindrome");
    }
    else{
        console.log("No Palindrome");
    }
};
palindrome(string);
