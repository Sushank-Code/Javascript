
// fetch api (Get Method)

const url = "https://api.thecatapi.com/v1/images/search?limit=10"; // cat image api(10)

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
    // console.log(data[1].url);

    // data.slice(0,5).forEach(image => {  // for each
    //     let imgelement = document.createElement('img');
    //     imgelement.src= image.url;
    //     images.append(imgelement);
    // });

    // for (let index = 0; index <= 2; index++) {   // for loop
    //     let imgelement = document.createElement('img');
    //     imgelement.src= data[index].url;
    //     images.append(imgelement);
    // }
    
    for (const i of data.slice(0,5)) {
        let imgelement = document.createElement('img');
        imgelement.src= i.url;
        images.append(imgelement);
    }
};

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
