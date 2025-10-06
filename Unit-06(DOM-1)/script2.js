// DOM Manipulation

// let heading = document.getElementById("heading");    
// console.dir(heading);

// let className = document.getElementsByClassName("container"); 
// console.dir(className);

// let in_put = document.getElementsByTagName("input");
// console.dir(in_put);

//    <---query selector ( most use )--->

// let firstele = document.querySelector("label");
// console.dir(firstele);

// let allele = document.querySelectorAll("label");   // return nodelist
// console.dir(allele);

let class_name = document.querySelector(".signin");   // " . " is must in queryselector
console.dir(class_name);

let id_name = document.querySelector("#heading");
console.dir(id_name);

// Properties

console.log(id_name.tagName);
console.log(class_name.innerText);
console.log(class_name.innerHTML);    // Gives the whole html with tags

class_name.innerText = "demo";

console.log(id_name.textContent);       // Gives the text , ignores the html tags 
console.log(class_name.textContent);   
