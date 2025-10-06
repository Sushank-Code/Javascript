// for Loop

for (let i = 1; i <= 5; i++) {
    console.log("Sushank Lamsal");
}

// let n = Number(prompt("Enter the number"));
let n = 10;
let s = 0;

for (let i = 1; i <= n; i++) {
    s = s + i;
}
console.log(s);

// While Loop

let u = 1;

while (u <= 5) {
    console.log(u);
    u++;
}

// do - While Loop

let z = 20;
do {
    console.log("Sushank Lamsal");// execute at least one time even if cond doesnot match
} while (z <= 10);

// for - of Loop      (string & array)  (iterates values)

let str = "Sushank";
let length = 0;
for (let i of str) {
    console.log(i);
    length++;
}
console.log("Length :", length);

// for - in Loop.  (Object & array) (iterates keys and index)
let student = {
    name: "Sushank Lamsal",
    age: 20,
    cgpa: 7.5,
    ispass: true,
};

for (let key in student) {
    console.log(key);                     // key
    console.log(student[key]);            // Values
}