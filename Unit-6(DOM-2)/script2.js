let newBtn =document.createElement("button");
newBtn.innerText = "Submit";

// appending the button tag inside div ( first select where you want to put )

let div = document.querySelector("div");

div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);   
// div.after(newBtn);      

// deleting the element

newBtn.remove();

// class list  => used for adding , removing & replacing classes 

div.classList.add("Class_name","foo","boo");
div.classList.remove("boo");
div.classList.replace("foo","bar");