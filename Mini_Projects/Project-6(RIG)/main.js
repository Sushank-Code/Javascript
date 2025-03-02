// api logic

let rimages = document.querySelector(".images");
let button = document.querySelector("button");

let count = 0;

function fetchimages(count){
    for (let index = count+1; index <= count + 4; index++) {
        let imgelement = document.createElement('img');
        imgelement.src= `https://picsum.photos/300/300?random=${index}`;
        rimages.append(imgelement);
        console.log(index);
    }
}
fetchimages(count);

button.addEventListener("click", () => {
    count = count + 5
    fetchimages(count);
});

// Using Fetch API

// const getimages = async () => {
//   try {
//     console.log("Fetching Images...");
//     for (let index = 1; index <= 2; index++) {
//       let response = await fetch(
//         `https://picsum.photos/300/300`
//       );
//       if (!response.ok) {
//         throw new Error(`Error ${response.status}: ${response.statusText}`);
//       }
//       let data = response.url;    // response is not json , it is url
//       let imgelement = document.createElement("img");
//       imgelement.src = data;
//       rimages.append(imgelement);
//       console.log(index);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// getimages();
// button.addEventListener("click", getimages);
