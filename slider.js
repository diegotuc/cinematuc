const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider--section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRigth = document.querySelector("#btn-rigth");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function derecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider--section")[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 0.05s";
    setTimeout(function(){
        slider.style.transition = "none"
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-50%";
    },70);
    }

    function izquierda(){
        let sliderSection = document.querySelectorAll(".slider--section");
let sliderSectionLast = sliderSection[sliderSection.length -1];
        slider.style.marginLeft = "0%";
        slider.style.transition = "all 0.05s";
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement('afterbegin',sliderSectionLast);
            slider.style.marginLeft = "-50%";
        },70);
        }
btnRigth.addEventListener('click',function(){
    derecha();
});

btnLeft.addEventListener('click',function(){
    izquierda();
});

setInterval(function(){
    derecha();
},5000);



