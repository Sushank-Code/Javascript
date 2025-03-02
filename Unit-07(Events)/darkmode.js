let modebtn = document.querySelector("button");
let body_b = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark";
        body_b.style.backgroundColor="black";
    }
    else{
        currmode = "light";
        body_b.style.backgroundColor="white";
    }
    console.log(currmode);
});