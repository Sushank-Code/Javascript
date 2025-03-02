// let n = 100;

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


// let guessNum = 25;

// let userguess = Number(prompt("Ente the number"));
// while (userguess != guessNum) {
//     userguess = Number(prompt("You guessed Wrong ! Enter again"));
// }
// alert("you guessed right");

// fibonacci series generate

const fibonacci = (n) => {
    if (n <= 0) {
        return 0;
    } else if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let n=5;
for (let index = 0; index < n; index++) {
    console.log(fibonacci(index));
    
}

