
const mythrottle = (fn,d) => {
    return function(...args){
        document.querySelector("#mybtn").disabled = true;
        setTimeout(() =>{
            fn();
        },d);
    }
} 

const myfunc = mythrottle(() => {
    document.querySelector("#mybtn").disabled = false;
    console.log("Button Clicked");
},5000);