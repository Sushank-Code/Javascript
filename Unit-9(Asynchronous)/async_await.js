
// Async and Await 

function weatherapi(weather){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather:",weather);
            resolve("Success");
        }, 3000);
    });
}

// async function getweatherdata() {
//     await weatherapi("Rainy");
//     await weatherapi("Cloudy");
//     await weatherapi("Sunny");
// }

// Here we have to make function to use await so this problem is solved by IIFE
// IIFE = Immediately Invoked Function expression

(async function (){
    await weatherapi("Rainy");
    await weatherapi("Cloudy");
    await weatherapi("Sunny");
})();
