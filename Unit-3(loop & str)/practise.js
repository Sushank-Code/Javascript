// let n = 100;

// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


let guessNum = 25;

let userguess = Number(prompt("Ente the number"));
while(userguess != guessNum){
    userguess = Number(prompt("You guessed Wrong ! Enter again"));
}
alert("you guessed right");