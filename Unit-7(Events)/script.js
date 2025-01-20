let btn_b = document.querySelector("#btn");
let div = document.querySelector("div");

// btn_b.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY); // Client = Position in a screen
// };


// div.onmouseover = (e) => {
//   div.style.backgroundColor = "red";
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// };

// Other way to handle Events (best approach)

btn_b.addEventListener("click",(evt)=>{
    console.log("Button was clicked");
    console.log(evt.type);
});

const handler2 = ()=>{
    console.log("Button was clicked 2");
};
btn_b.addEventListener("click",handler2);

btn_b.removeEventListener("click",handler2);
