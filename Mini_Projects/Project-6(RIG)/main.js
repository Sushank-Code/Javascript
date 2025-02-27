
// api logic

let rimages = document.querySelector(".images");
let button = document.querySelector("button");

let count = 0;

function fetchimages(count){
    for (let index = count+1; index <= count + 4; index++) {
        let imgelement = document.createElement('img');
        imgelement.src= `https://picsum.photos/300/300?random=${index}`;
        rimages.append(imgelement);
    }
}
fetchimages(count);

button.addEventListener("click", () => {
    count = count + 5
    fetchimages(count);
});
