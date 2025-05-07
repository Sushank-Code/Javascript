
// Local storage

const username = document.querySelector('#username');
const btn = document.querySelector('#clickbtn');
const clearbtn = document.querySelector('#clearbtn');
const uname = document.querySelector("#uname");
const age = document.querySelector('.age');

// setting into local storage

btn.addEventListener('click', ()=>{
    const userinput = username.value;
    localStorage.setItem('Name',userinput);
    location.reload();
});

// getting from local storage

window.addEventListener('load',()=>{
    const value = localStorage.getItem('Name');
    const age_value = localStorage.getItem('age');
    uname.innerText = value ;
    age.innerText = age_value;
});

// Clearing the local storage

clearbtn.addEventListener('click', ()=>{
    localStorage.clear();
    username.value = "";
    location.reload();
});
