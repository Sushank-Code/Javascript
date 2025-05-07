
// session

const username = document.querySelector('#username');
const btn = document.querySelector('#clickbtn');
const clearbtn = document.querySelector('#clearbtn');
const uname = document.querySelector("#uname");
const age = document.querySelector('.age');

// setting into session storage

btn.addEventListener('click', ()=>{
    const userinput = username.value;
    sessionStorage.setItem('Name',userinput);
    location.reload();
});

// getting from session storage

window.addEventListener('load',()=>{
    const value = sessionStorage.getItem('Name');
    uname.innerText = value ;
});

// Clearing the session storage

clearbtn.addEventListener('click', ()=>{
    sessionStorage.clear();
    username.value = "";
    location.reload();
});
