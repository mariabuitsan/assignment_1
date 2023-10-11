//choosing my HTML elements and saving it into a variable
let object1 = document.querySelector('.layer1')
//selecting and saving my second 'object' that will display after click
let showMe = document.querySelector('.layer1a')
//my first 'object' will listen to user click
let onClick = function(){
    showMe.style.display = "flex";
}
//adding event listener
object1.addEventListener("click", onClick);

//second click
let cradle = document.querySelector('.layer1a')
let crown = document.querySelector('.layer1b')
let book = document.querySelector('.layer1c')

//second click function
let onClick2 = function(){
    crown.style.display = "flex";
    book.style.display = "flex";
}
//second click event lister
cradle.addEventListener("click", onClick2);

//third click
let bookAction = document.querySelector('.layer1c')
let object2 = document.querySelector('.layer2')
let onClick3 = function(){
    object2.style.display = "flex";
}

bookAction.addEventListener("click", onClick3);

//four click
let quoteAction = document.querySelector('.layer2')
let panuelo = document.querySelector('.layer2a')
let royal = document.querySelector('.layer2b')
let gemas = document.querySelector('.layer2c')
let cradleobject = document.querySelector('.layer2d')

let onClick4 = function(){
    panuelo.style.display = "flex";
    royal.style.display = "flex";
    gemas.style.display = "flex";
    cradleobject.style.display = "flex";
};

quoteAction.addEventListener("click", onClick4);

//final click 
let royalAction = document.querySelector('.layer2b')

quote3 = document.querySelector('.layer3')
chontaduro = document.querySelector('.layer3a')
limpiar = document.querySelector('.layer3b')
glass = document.querySelector('.layer3c')
protestas = document.querySelector('.layer3d')

let onClick5 = function(){
   quote3.style.display = "flex";
   chontaduro.style.display = "flex";
   limpiar.style.display = "flex";
   glass.style.display = "flex";
   protestas.style.display = "flex";
};

royalAction.addEventListener("click", onClick5)
