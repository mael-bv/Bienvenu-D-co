

const dropdown = document.querySelector('.dropdown2');
const bloc = document.querySelector('.bloc-links');
const btnTop2 = document.querySelector('.btnTop');
const liItems = document.querySelectorAll('.bloc-links li');

let toggleIndex;

btnTop2.addEventListener('click', toggleDropdown);

function toggleDropdown(){
    if(!toggleIndex){
        bloc.style.height = `${bloc.scrollHeight}px`;
        toggleIndex = true;
        return
    }
    bloc.style.height =0;
    toggleIndex = false;
}

liItems.forEach(li =>li.addEventListener('click',toggleDropdown));
/* --------------------------------------------------------------------- */

const slideshowImg = document.querySelectorAll(".slideshow-img");

const nextImageDelay =3000;

let currentImage = 0;

/* slideshowImg[currentImage].style.display ="block"; */
slideshowImg[currentImage].style.opacity =1;

setInterval(nextImage, nextImageDelay);

function nextImage(){
    /* slideshowImg[currentImage].style.display ="none"; */
    slideshowImg[currentImage].style.opacity =0;
    currentImage = (currentImage + 1) % slideshowImg.length;
    /* slideshowImg[currentImage].style.display ="block"; */
    slideshowImg[currentImage].style.opacity =1;
}


const slindingBtn = document.querySelector(".information-zone");
window.addEventListener('scroll', () =>{
 const {scrollTop, clientHeight}=
 document.documentElement;

 const topElem = slindingBtn.getBoundingClientRect().top;

 if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
 slindingBtn.style.opacity='1';
 slindingBtn.style.transform='translateX(0%)';
 slindingBtn.style.transition='.8s'; }
})

const slindingCar = document.querySelector(".caroussel");
window.addEventListener('scroll', () =>{
 const {scrollTop, clientHeight}=
 document.documentElement;

 const topElem = slindingCar.getBoundingClientRect().top;

 if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
 slindingCar.style.opacity='1';
 slindingCar.style.transform='translateX(0%)';
 slindingCar.style.transition='.8s'; }
})


const back = document.querySelector('.navbar-image');

back.addEventListener('click', ()=>{
    window.location = "index.php";
})