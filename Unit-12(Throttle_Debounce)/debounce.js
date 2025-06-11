
// const func = mydebounce(getdata,2000);

// let counter = 0;
// function getdata() {
//     console.log("fetching data" + counter++);
// }

// function mydebounce(call,d) {
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         setTimeout(() => {
//             call();
//         }, d);
//     }

// }


// better approach

let counter = 0;

const logger = () => console.log('searching', counter++);

let timer;

const listener = () => {

   timer && clearTimeout(timer);

   timer = setTimeout(() => logger(), 500);

};

document.querySelector('input').addEventListener('keyup', listener);
