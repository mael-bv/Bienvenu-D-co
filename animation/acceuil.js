///////////////CAROUSSEL///////////////////////////////
/* const img = document.querySelectorAll(".slider img");
const nbSlide = img.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

function slideSuivant(){
    img[count].classList.remove('active');

    if (count < nbSlide -1){
        count++;
    }else{
        count=0;
    }

    img[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivant);


function slidePrecedent(){
    img[count].classList.remove('active');

    if(count > 0){
        count--;
    }else{
        count=nbSlide -1;
    }

    img[count].classList.add('active')
   }

   precedent.addEventListener('click', slidePrecedent);
   ////////////NAVBAR/////////////////////////////////////
   const nav = document.querySelector(".navbar");

   window.addEventListener('scroll', () =>  {
    if(window.scrollY > 300){
        nav.classList.add('anim-nav');
    }else{
        nav.classList.remove('anim-nav');
    }
   }) */

   /////////////LOADER//////////////////////////////////////
   const loader = document.querySelector(".loader");


  



   window.addEventListener('load', () =>{
    loader.classList.add("fondu-out");
   })
   //////////////////MAPBTN1////////////////////////////////
   const slindingBtn = document.querySelector(".map-btn1");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElement = slindingBtn.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElement).toFixed()-clientHeight *1)
        slindingBtn.classList.add('activation')
   })

   const slindingTitle = document.querySelector(".map-titre");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingBtn.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *1)
        slindingTitle.classList.add('activation')
   })



   ///////////////////////METIER////////////////////////////////////////

   /* const textAnim = document.querySelector('.redaction h1');
   new Typewriter(textAnim, {
       
    })

    new Typewriter(textAnim, {
        deleteSpeed:20
    })
   .typeString('Moi ces Raymond')
   .pauseFor(300)
   .typeString('<strong>, Peintre</strong>')
   .start() */




   const slindingImg = document.querySelector(".pinter");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight*0.70){
        slindingImg .style.opacity='1';
        slindingImg .style.transform='translateX(0%)';
        slindingImg .style.transition='.8s';
    }
   })

   const slindingImg2 = document.querySelector(".plafond-1");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg2.getBoundingClientRect().top;
    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight*0.70){
        slindingImg2 .style.opacity='1';
        slindingImg2 .style.transform='translateX(0%)';
        slindingImg2 .style.transition='.8s'; }
   })


   const slindingImg3 = document.querySelector(".cuisine-1");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg3.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
    slindingImg3.style.opacity='1';
    slindingImg3.style.transform='translateX(0%)';
    slindingImg3.style.transition='.8s'; }
   })
   

   const slindingImg4 = document.querySelector(".plaque");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg4.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
    slindingImg4.style.opacity='1';
    slindingImg4.style.transform='translateX(0%)';
    slindingImg4.style.transition='.8s'; }
   })

   const slindingImg5 = document.querySelector(".maçon");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg5.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
    slindingImg5.style.opacity='1';
    slindingImg5.style.transform='translateX(0%)';
    slindingImg5.style.transition='.8s'; }
   })

   const slindingImg6 = document.querySelector(".jardin");
   window.addEventListener('scroll', () =>{
    const {scrollTop, clientHeight}=
    document.documentElement;

    const topElem = slindingImg6.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
    slindingImg6.style.opacity='1';
    slindingImg6.style.transform='translateX(0%)';
    slindingImg6.style.transition='.8s'; }
   })


const items = document.querySelectorAll(".container-img img");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;
function slideSuivant(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }else{
        count = 0;
    }
    items[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivant);

function slidePrecedent(){
    items[count].classList.remove('active');
    if(count >0){
        count--
    }else{
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedent);


   const slidingC = document.querySelector('.container-img');
window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToNav = slidingC.
    getBoundingClientRect().top;


    if(scrollTop > (scrollTop + topElementToNav).toFixed()-clientHeight*0.50){
        slidingC.style.opacity='1';
        slidingC.style.transform='translateX(0%)';
        slidingC.style.transition='.8s';
    }
        
})

////////////////////HISTOIRE//////////////////////////////////////
  
const slidingBtn2 = document.querySelector('.right-hist');
window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight} = document.documentElement;
    const topElementToNav = slidingBtn2.
    getBoundingClientRect().top;


    if(scrollTop > (scrollTop + topElementToNav).toFixed()-clientHeight*0.50){
        slidingBtn2.style.opacity='1';
        slidingBtn2.style.transform='translateX(0%)';
        slidingBtn2.style.transition='.8s';

    }
})


  

//////////////BTN-TOP//////////





/* ///////////////////DROPDOWN2//////// */
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






   



   /* function mooveImg(indexPlus){
    indexPlus.style.opacity='1';
    indexPlus.style.transform='translateX(0%)';
    indexPlus.style.transition='.8s';

   }
   const slindingImg = document.querySelector(".pinter");
   mooveImg(slindingImg); */

   /* -----------REMPLACE VI2O----- */
   const titreSpan = document.querySelectorAll('.container-first1 h1 span');
   const btns3 = document.querySelectorAll('.btn-first1');
   const l1 = document.querySelector('.l1');
   const l2 = document.querySelector('.l2');
   
   window.addEventListener('load', ()=>{
       const TL = gsap.timeline({paused:true});
       TL
       .staggerFrom(titreSpan, 1,{top:-50,opacity:0, ease : "power2.out"},0.3)
       .staggerFrom(btns3, 1,{opacity:0, ease : "power2.out"},0.3, '-=1')
       .from(l1, 1, {width:0, ease:"power2.out"},'-=2')
       .from(l2, 1, {width:0, ease:"power2.out"},'-=2')
       TL.play()
    })

    const back = document.querySelector('.navbar-image');

back.addEventListener('click', ()=>{
    window.location = "index.php";
})

    const savoirP = document.querySelector('.map-btn1');

    savoirP.addEventListener('click', ()=>{
        window.location = "secteur.html";
    })

    const histoire = document.querySelector('.btn-histoire');
    
    histoire.addEventListener('click', ()=>{
        window.location = "histoire.html";
    })

    
    const recrutement2 = document.querySelector('.btn-recrutement');
    
    recrutement2.addEventListener('click', ()=>{
        window.location = "recrutement.php";
    })

     

    const contact2 = document.querySelector('.btn-first1 b2');
    
    contact2.addEventListener('click', ()=>{
        window.location = "contact.php";
    })

    const discover = document.querySelector('.btn-first1 b1');
    
    discover.addEventListener('click', ()=>{
        window.location = "histoire.html";
    })

    const disco = document.querySelector('.b1');
disco.addEventListener('click', ()=>{
    window.location = "histoire.html";
})

const cont = document.querySelector('.b2');
cont.addEventListener('click', ()=>{
    window.location = "contact.php";
})