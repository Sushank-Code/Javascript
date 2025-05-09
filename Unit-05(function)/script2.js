// Map ( Similar to for-each but return new array )

let arr = [12,24,45,67,89];

let newarr = arr.map( (val) =>{
    return val * 2;
});
console.log(newarr);


// Filter (taking out the values if condition matches and give it in new array)
//  Note : Can combine filter and map too = flatmap or use separately

let arr_num=[2,5,6,8,10,7,13,16,15,45,68,98,75,89,91];

let newarr_num = arr_num.filter((val) =>{
    return val % 2 === 0;
});
console.log(arr_num);
console.log(newarr_num);

// reduce  (Give single values)

let output = arr_num.reduce((prev,curr) =>{
    return prev + curr;
});
console.log(output);
console.log(typeof(output));

// Some & Every 
// some = return true if any one condtion matches
// every = return true if all the condition matches

const person = [
    {
        pname : "Person1",
        age : 20,
        city : "Lumbini",
    },
    {
        pname : "Person2",
        age : 30,
        city:"Kathmandu",
    },
];
let checksomeMethod = person.some((p,index)=>{
    return p.age === 20;
});
console.log(checksomeMethod);

let checkeveryMethod = person.every((p,index)=>{
    return p.age === 20;
});
console.log(checkeveryMethod);