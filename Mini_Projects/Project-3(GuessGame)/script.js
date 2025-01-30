
// Guess

let randomNum = parseInt(Math.random() * 100 + 1);

// Targeting elements

let input = document.querySelector("#inputfield");
let submit = document.querySelector("#submitfield");

let preGuess = document.querySelector(".guesses");
let hiorlo = document.querySelector(".hiorlo");

let playGame = true;

if (playGame) {
    submit.addEventListener("click", (evt) => {
        evt.preventDefault();                    // Doesnot let page to refresh
        const guess = parseInt(input.value);
        validateGame(guess);
    });
}

const validateGame = (guess) => {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number");
    }
    else if (guess < 1) {
        alert("Please Enter a Number greater than 1");
    }
    else if (guess > 100) {
        alert("Please Enter a Number less than 100");
    }
    else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

const checkGuess = (guess) => {
    if (guess === randomNum) {
        displayMessage("You guessed it right ! Hurray");
    }
    else if (guess < randomNum) {
        displayMessage("Low !");
    }
    else if (guess > randomNum) {
        displayMessage("High !");
    }
}

const displayGuess = (guess) => {
    input.value = "";
    preGuess.innerText += `${guess},`;
}

const displayMessage = (message) => {
    hiorlo.innerHTML = `<h2> ${message}</h2>`;
    if (hiorlo.innerText === "You guessed it right ! Hurray") {
        input.disabled = true;
        newgame.style.visibility = "visible";
    }
}

// For New game

let newgame = document.querySelector("button");
newgame.addEventListener("click", () => {
    location.reload();
});
