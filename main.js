// Variables

const container = document.querySelector(".container")
const color = document.getElementById("colorpicker").value
const gitIcon = document.getElementById("git")
console.log(color)
const button = document.querySelector("#erase")
const rubber = document.querySelector("#rubber")
const randomBtn = document.querySelector('#random')
let rubberIsclicked = false
let rubberCounter = 0
let randomIsclicked = false
let randomCounter = 0
let randomColor = 999999
// Ask number of pixels from user

let pixels = parseInt(prompt("How many pixels do you want to draw")) ;

gitIcon.addEventListener('mouseover', () => {
    gitIcon.classList.add("fa-spin")
})

gitIcon.addEventListener('mouseout', () => {
    gitIcon.classList.remove("fa-spin")
})



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
    newDiv.classList.add("squares")
    

    container.appendChild(newDiv)
}

container.style["grid-template-columns"] =`repeat(${pixels},1fr)`;
container.style["grid-template-rows"] =`repeat(${pixels},1fr)`;

// Change pixel color

function putColor(e) {
    if (!rubberIsclicked && !randomIsclicked){
        const color = document.getElementById("colorpicker").value
        e.target.style.backgroundColor = color

    }else if (rubberIsclicked){
        e.target.style.backgroundColor = "white"

    }else if (randomIsclicked){
            
        randomColor = Math.floor(Math.random()*999999)
        console.log(randomColor)
        while (randomColor.toString().length < 6) {
            randomColor = Math.floor(Math.random()*999999)
            if (randomColor.toString().length === 6){
                break
            }
            
        }
        console.log(randomColor)

        randomColor = `#${randomColor}`
        e.target.style.backgroundColor = randomColor


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
    if (rubberCounter === 1 || rubberCounter % 2 !== 0){
        rubberIsclicked = true
        if (randomIsclicked === true) {
            randomIsclicked = false
            randomBtn.classList.remove("clicked")
            randomBtn.classList.add("unclicked")
            randomCounter++
        }
        rubber.classList.remove("uncklicked")
        rubber.classList.add("clicked")
    }else {
        rubberIsclicked = false
        rubber.classList.remove("clicked")
        rubber.classList.add("unclicked")

    }
});

container.addEventListener('mouseover', putColor)
    
randomBtn.addEventListener('click', () => {
    randomCounter += 1
    if (randomCounter === 1 || randomCounter % 2 !== 0){
        randomIsclicked = true
        if (rubberIsclicked === true) {
            rubberIsclicked = false
            rubberCounter++
            rubber.classList.remove("clicked")
            rubber.classList.add("unclicked")
        }
        randomBtn.classList.remove("uncklicked")
        randomBtn.classList.add("clicked")
    }else {
        randomIsclicked = false
        randomBtn.classList.remove("clicked")
        randomBtn.classList.add("unclicked")

    }
    console.log(`random is clicked:${randomIsclicked}`)
});


    

