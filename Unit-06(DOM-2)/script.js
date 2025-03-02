let div_name = document.querySelector("div");
console.log(div_name);

// get attributes
console.log(div_name.attributes);
console.log(div_name.getAttribute("id"));
console.log(div_name.getAttribute("name"));

// set attributes
console.log(div_name.setAttribute("id","new_box"));   // Changing the attribute name
console.log(div_name.setAttribute("class","hello_box")); // can be set new attributes too

// node style
div_name.style.backgroundColor = "green";
div_name.style.color = "yellow";
div_name.innerText="Hello";
