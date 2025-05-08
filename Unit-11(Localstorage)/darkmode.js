
// darkmode 

let btn = document.querySelector(".btn");
let darkmode = localStorage.getItem('darkmode');  // getting darkmode (local storage)

btn.addEventListener("click",()=>{
    if(darkmode !== "active"){
        enabledarkmode();
    }
    else{
        disabledarkmode();
    }
    darkmode = localStorage.getItem('darkmode'); // updating darkmode
});

const enabledarkmode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkmode','active')
}
const disabledarkmode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode','null')
}

// After Page load
if(darkmode === "active"){
    enabledarkmode();
}

