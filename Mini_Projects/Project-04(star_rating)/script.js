

// star-rating

let star_list = document.querySelectorAll(".fa-regular");
let rating = document.querySelector(".rating-value");

star_list.forEach((star, i1) => {
    star.addEventListener("click", () => {   
        star_list.forEach((star, i2) => {
            if (i1 >= i2) {
                console.log(i1,i2);
                star.classList.add("active");
            } else {
                console.log(i1,i2);
                star.classList.remove("active");
            }
        });
        rating.innerText = i1 + 1;
    })
});