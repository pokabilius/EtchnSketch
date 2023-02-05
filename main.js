// Variables

const container = document.querySelector(".container")
const color = document.getElementById("colorpicker").value
const button = document.querySelector("#erase")
const rubber = document.querySelector("#rubber")
let rubberIsclicked = false
let rubberCounter = 0

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

// Change pixel color

function putColor(e) {
    if (!rubberCounter){
        const color = document.getElementById("colorpicker").value
        e.target.style.backgroundColor = color
        console.log("enter painter")
    }else if (rubberIsclicked){
        e.target.style.backgroundColor = "white"
        console.log("enter rubber")

    }
}


// Erase  board
const squares = document.querySelectorAll(".squares");
console.log(squares)
button.addEventListener('click', ()=> {
    squares.forEach(square => {
        square.style.backgroundColor = "white"
    });
})

// rubber

rubber.addEventListener('click', () => {
    rubberCounter += 1
    console.log(rubberCounter)
    if (rubberCounter === 1 || rubberCounter % 2 !== 0){
        rubberIsclicked = true
        rubber.classList.remove("uncklicked")
        rubber.classList.add("clicked")
    }else {
        rubberIsclicked = false
        rubber.classList.remove("clicked")
        rubber.classList.add("unclicked")
        container.addEventListener('mouseover', putColor)

    }
    console.log(`rubber is clicked:${rubberIsclicked}`)
});

container.addEventListener('mouseover', putColor)
    



  

