
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


const slindingContain = document.querySelector(".titre-container");
        window.addEventListener('scroll', () =>{
         const {scrollTop, clientHeight}=
         document.documentElement;
        
         const topElem = slindingContain.getBoundingClientRect().top;
        
         if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
         slindingContain.style.opacity='1';
         slindingContain.style.transform='translateX(0%)';
         slindingContain.style.transition='.8s'; }
        })


        const slindingImg = document.querySelector(".caroussel");
        window.addEventListener('scroll', () =>{
         const {scrollTop, clientHeight}=
         document.documentElement;
        
         const topElem = slindingImg.getBoundingClientRect().top;
        
         if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
         slindingImg.style.opacity='1';
         slindingImg.style.transform='translateX(0%)';
         slindingImg.style.transition='.8s'; }
        })

        const slindingImg2 = document.querySelector(".drapeau");
        window.addEventListener('scroll', () =>{
         const {scrollTop, clientHeight}=
         document.documentElement;
        
         const topElem = slindingImg2.getBoundingClientRect().top;
        
         if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
         slindingImg2.style.opacity='1';
         slindingImg2.style.transform='translateX(0%)';
         slindingImg.style.transition='.8s'; }
        })

 const slideshowImg = document.querySelectorAll(".slideshow-img");

const nextImageDelay =1500;

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


const  title =document.querySelector(".title-story h1");
const txt = "DEPUIS 1984"
function typewriter(word, index){
    if(index < word.length){
        setTimeout(()=>{
            title.innerHTML +=`<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        },800)
    }
}
setTimeout(()=>{
    typewriter(txt, 0)
},500)


const back = document.querySelector('.navbar-image');

back.addEventListener('click', ()=>{
    window.location = "index.php";
})

