let companies = ["Bloomberg", "Microsoft", "uber", "Google", "Ibm", "Netflix"];

companies.shift();
console.log(companies);

companies.splice(1, 1, "ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

// find = return the first element of array that statisfy condition

let checkfindmethod = companies.find((company)=>{
    return company === "Microsoft";
});
console.log(checkfindmethod);


// includes

let checkinclude = companies.includes("Microsoft");
console.log(checkinclude);

// index-of  = Gives index 

let checkindex = companies.indexOf("Microsoft");
console.log(checkindex);

// findIndex  = Gives index only if condition matches ( only work for function )

let checkindex2 = companies.findIndex((company)=>{
    return company === "Microsoft";
});
console.log(checkindex2);