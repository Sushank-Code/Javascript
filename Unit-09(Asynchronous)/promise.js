// ---promises---

// ---Reject and Resolve are builtin js Handlers---

// let promise = new Promise((resolve, reject) => {
//   console.log("Hello Its me");
//   resolve("Sucess");
//   // reject("Error");
// });

// function getdata(dataid, getnextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data :", dataid);
//       resolve("Sucess")
//       if (getnextdata) {
//         getnextdata();
//       }
//     }, 2000);
//   });
// }

// let result = getdata(123);

// --then & catch  are sucess and reject--

// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//       console.log("Promise");
//       resolve("Success");
//       // reject("Error");
//     });
// }

// let promise = getpromise();

// promise.then((result) => {
//   console.log("Promise fulfilled,",result);
// });

// promise.catch((err) => {
//   console.log("promise Not fulfilled ,",err);
// });

// ---Promise chaining---

function asyncfunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Success");
    }, 3000);
  });
}

function asyncfunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Success");
    }, 3000);
  });
}

console.log("fetching data1.....");

let p1 = asyncfunction1();

// p1.then((result) => {
//   console.log("Success data1");
//   console.log("fetching data2.....");
//   let p2 = asyncfunction2();
//   p2.then((result) => {
//     console.log("Success data2");
//   });
// });

// other Method
p1.then((result) => {
  return asyncfunction1();
}).then((result) => {
  console.log(result);
});
