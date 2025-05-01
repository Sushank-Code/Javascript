// filter logic

    const buttons = document.querySelectorAll("sl-button");
    const cards = document.querySelectorAll(".card-overview");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.innerText.trim().toLowerCase(); // Get category name
            

            cards.forEach(card => {
                if (category === "all") {
                    card.style.display = "block"; // Show all cards
                }else{
                    if (card.classList.contains(`${category}class`)) {
                        card.style.display = "block"; // Show matching cards
                    }else {
                        card.style.display = "none"; // Hide non-matching cards
                    }
                }
            });
        });
    });

    // Searching Logic
    let inputelement = document.querySelector(".input1");
    let sbtn = document.querySelector(".searchbtn");

    sbtn.addEventListener("click",()=>{
        let input = inputelement.value.toLowerCase();
        let intp = input.replace(/\s/g,'');
        cards.forEach(card => {
            if(card.classList.contains(`${intp}class`)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
                
            }
        });
        console.log("Button was clicked");
    });




