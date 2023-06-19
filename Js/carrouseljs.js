const carrousel = document.querySelector(".card");

let intervalo = null;
let step = 1;
const star = () =>{
    intervalo = setInterval(function(){
        carrousel.scrollLeft = carrousel.scrollLeft = step;
    }, 10);
}

const stop = () => {};

star();