
let username = document.querySelector(".username");
let btn = document.querySelector("button");
let newbtn = document.querySelector(".new");
let githubuser = document.querySelector(".githubuser");


const url = "https://api.github.com/users/";

const getGuser = async () => {
    let response = await fetch(url + username.value);
    let data = await response.json();
   
    GuserDetail(data);
}

function GuserDetail(gdata) {
    // console.log(gdata);
    githubuser.innerHTML = 
    `
    <P>UserName :${gdata.login} </P>
    <P>Name :${gdata.name} </P>
    <img src="${gdata.avatar_url}" alt="">
    <P>Followers :${gdata.followers} </P>
    <P>Following :${gdata.following} </P>
    <P>Public Repositary :${gdata.public_repos} </P>
    `
}

btn.addEventListener("click",getGuser);

newbtn.addEventListener("click",()=>{
    username.value  = "";
    location.reload();
});