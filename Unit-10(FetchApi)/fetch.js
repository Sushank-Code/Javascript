
const url = "https://api.thecatapi.com/v1/images/search?limit=10"; // cat image api

// let promise = fetch(url);
// console.log(promise);

let images = document.querySelector(".images");
let btn = document.querySelector("button");

// using Async - Await

const getpic = async () => {
    console.log("fetching data ...");
    let response = await fetch(url);
    // console.log(response);   // json format

    let data = await response.json();
    // console.log(data[0]);
    console.log(data[1].url);

    let imgelement = document.createElement('img');
    imgelement.src= data[2].url;
    images.append(imgelement);
}

// Using Promise chaining

// function getpic() {
//     fetch(url)
//     .then((response) => {
//        return response.json();
//     }).then((data)=>{  
//         let imgelement = document.createElement('img');
//         imgelement.src= data[2].url;
//         images.append(imgelement);
//     });
// }

btn.addEventListener("click", () => {
    getpic();
});
