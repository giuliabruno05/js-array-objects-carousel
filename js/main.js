

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\\s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters ,incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];


const elItem = document.getElementById("container");

    images.forEach((element) => {
     const elphoto = 
        `<div class="card">
        <img src="${element.image}" class="foto">
        <div class="text">
        <h3>${element.title}</h3>
        <p>${element.text}</p>
        </div>
        </div>`
       
    
   elItem.innerHTML += elphoto;
});




  

// mi prendo il riferimento degli elementi

const object = document.querySelectorAll(".card");
const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");
const text = document.getElementById("text");

//aggiungo la classe active alle immagini 
let imgPosition = 0
object[imgPosition].classList.add("active");




//aggiungo la funzione click al bottone

buttonNext.addEventListener("click",imgNextButton);
buttonPrev.addEventListener("click", imgPrevButton);
    



//FUNZIONE
function imgNextButton() {
    object[imgPosition].classList.remove("active");
   
    if (imgPosition == images.length -1 ){
        imgPosition = 0;
    }else{
        imgPosition++;
    }
        
    
    object[imgPosition].classList.add("active");
   
}

function imgPrevButton() {
    object[imgPosition].classList.remove("active");

    if (imgPosition == 0){
        imgPosition = images.length -1;
    } else{
        imgPosition--;
    }
    object[imgPosition].classList.add("active");
}