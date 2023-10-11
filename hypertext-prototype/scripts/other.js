let object1 = document.querySelector('.layer1')
//selecting and saving my second 'object' that will display after click
let showMe = document.querySelector('.layer1a')
let showMe2 = document.querySelector('.ana-words1')

//my first 'object' will listen to user click
let onClick = function(){
    showMe.style.display = "flex";
    showMe2.style.display = "flex";
}

//adding event listener
object1.addEventListener("click", onClick);

//second click
let palm = document.querySelector('.layer1a')
let drawing = document.querySelector('.layer1b')
let espinas = document.querySelector('.layer1c')
let showMe3 = document.querySelector('.ana-words2')
let showMe4 = document.querySelector('.espinas')
let espinas2 = document.querySelector('.layer1c-1')
let espinas3 = document.querySelector('.layer1c-2')

//second click function
let onClick2 = function(){
    drawing.style.display = "flex";
    espinas.style.display = "flex";
    showMe3.style.display = "flex";
    showMe4.style.display = "flex";
    espinas2.style.display = "flex";
    espinas3.style.display = "flex";
}
//second click event lister
palm.addEventListener("click", onClick2);

//third click
let espinasAction = document.querySelector('.layer1c')
let mano = document.querySelector('.layer2')
let nevera = document.querySelector('.layer2a')
let showMe5 = document.querySelector('.bajar')
let palabras = document.querySelector('.layer2b')
let glass = document.querySelector('.layer2c')

let onClick3 = function(){
    mano.style.display = "flex";
    nevera.style.display = "flex";
    showMe5.style.display = "flex";
    palabras.style.display = "flex";
    glass.style.display = "flex";
}

espinasAction.addEventListener("click", onClick3);

let abuelaStory = document.querySelector('.layer2d')
let finalClick = function(){
    abuelaStory.style.display = "flex";
}

mano.addEventListener("click", finalClick);