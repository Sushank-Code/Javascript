// fetch api (POST Method)

const url = "https://reqres.in/api/users";

let images = document.querySelector(".images");
let btn = document.querySelector("button");

const mydata = {
  name: "Sushank",
  job: "Web Dev",
};

// Using Promise Chaining

// function postdata() {
//     const myinit ={
//         method: 'POST', // HTTP method
//         headers: {
//             'Content-Type': 'application/json' // Specify content type
//         },
//         body: JSON.stringify(mydata) // Convert data to JSON string
//     }
//     fetch(url,myinit)
//     .then((response) => {
//         if(!response.ok){          // response.ok == false
//             throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }
//         return response.json();
//     }).then((data)=>{
//         let pelement = document.createElement("p");
//         pelement.innerText = JSON.stringify(data, null, 2);
//         images.append(pelement);
//         // console.log("Sucess :", data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }

// Using Async- Await
const postdata = async () => {
  try {
    const myinit = {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify(mydata), // Convert data to JSON string
    };
    let response = await fetch(url, myinit);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    let data = await response.json();
    console.log("Sucess :", data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", postdata);


// For Form

// let name = document.queryselector("#name").value 