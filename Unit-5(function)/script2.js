// Map ( Similar to for-each but return new array )

let arr = [12,24,45,67,89];

let newarr = arr.map( (val) =>{
    return val * 2;
});
console.log(newarr);

// Filter (taking out the values if condition matches)

let arr_num=[2,5,6,8,10,7,13,16,15,45,68,98,75,89,91];

let newarr_num = arr_num.filter((val) =>{
    return val % 2 === 0;
});
console.log(arr_num);
console.log(newarr_num);

// reduce  ( Give single values)

let output = arr_num.reduce((prev,curr) =>{
    return prev + curr;
});
console.log(output);