// Variables
const squares = document.querySelector(".squares");
const container = document.querySelector(".container")



// Ask number of pixels from user

let pixels = parseInt(prompt("How many pixels do you want to draw")) ;

if(isNaN(pixels) || pixels >= 100){
    while(true){
        if(isNaN(pixels)){
            pixels = parseInt(prompt("Please enter integer"));

        }else if(pixels>100) {
            pixels = parseInt(prompt("Please enter smaller than 100"));
        }
        else {
            break
        }

    }
}

// Append to parent container the number of pixels as divs with class squares

for (let i = 1; i < pixels**2; i++){
    let newDiv = document.createElement("div")
    // newDiv.textContent = "red";
    newDiv.classList.add("squares")
    container.appendChild(newDiv)
}

container.style["grid-template-columns"] =`repeat(${pixels},1fr)`;
container.style["grid-template-rows"] =`repeat(${pixels},1fr)`;


  

