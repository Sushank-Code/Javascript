
// calc

let display = document.querySelector("#display");

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === 'AC') {
            display.value = "";
        }
        else if (box.innerText === 'DE') {
            display.value = display.value.slice(0, -1);
        }
        else if (box.innerText === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Undefined";
            }
        }
        else {
            display.value += box.innerText;
        }
    });
});


// Other approach by making onclick function in html 

// const toDisplay = (input) => {
//     display.value +=input;
// }

// const Clear = () => {
//     display.value = "";
// }
// const oneClear = () => {
//     display.value = display.value.slice(0, -1);
// }
// const calculate = () => {
//     try {
//         display.value = eval(display.value)
//     } catch (error) {
//         display.value = "Undefined";
//     }
// }

