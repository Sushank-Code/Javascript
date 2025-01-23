
// Tic Tac Toe

let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#reset");

const winpatttern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let turnX = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            box.style.color = "blue";
            turnX = false;

        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;                // if once clicked cannot be again clicked 
        checkwinner();
    });
});


const checkwinner = () => {
    for (let pattern of winpatttern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};


const showwinner = (winner) => {
    setTimeout(() => {
        alert(`Congratulations! The winner is ${winner}`);
    }, 500);
    disableboxes();
};

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Reset game

resetbtn.addEventListener("click", () => {
    location.reload();
});