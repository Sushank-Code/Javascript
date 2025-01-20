let companies = ["Bloomberg", "Microsoft","uber","Google","Ibm","Netflix"];

companies.shift();
console.log(companies);

companies.splice(1,1,"ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);