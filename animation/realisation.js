const imgs = document.querySelectorAll(".img-s img")


let option = {
    /* root = null */
    rootMargin: "-25% 0px",
    threshold : 0
}

function intersect(entries) {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.style.opacity =1;
        }
    })
}

const observer = new IntersectionObserver
(intersect, option)

imgs.forEach(image =>{
    observer.observe(image)
})
/* ------------------------------------------------ */

/* ----------------------------------------------- */
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

/* ---------------------------------------------------- */

const contain = document.querySelector(".image-container")
const popimg = document.querySelector('.img-appa');
const closer = document.querySelector('.close');
function change1(){
    
    document.getElementById('newF').src="image/aa(1).jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change2(){
    
    document.getElementById('newF').src="image/11.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change3(){
    
    document.getElementById('newF').src="image/bb (1).jfif";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change4(){
    
    document.getElementById('newF').src="image/22.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change5(){
    
    document.getElementById('newF').src="image/sss.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change6(){
    
    document.getElementById('newF').src="image/33.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change7(){
    
    document.getElementById('newF').src="image/dd.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change8(){
    
    document.getElementById('newF').src="image/44.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change9(){
    
    document.getElementById('newF').src="image/ee.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change10(){
    
    document.getElementById('newF').src="image/55.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change11(){
    
    document.getElementById('newF').src="image/ff.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change12(){
    
    document.getElementById('newF').src="image/66.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change13(){
    
    document.getElementById('newF').src="image/gg.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change14(){
    
    document.getElementById('newF').src="image/77.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change15(){
    
    document.getElementById('newF').src="image/hh.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change16(){
    
    document.getElementById('newF').src="image/88.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change17(){
    
    document.getElementById('newF').src="image/ii.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change18(){
    
    document.getElementById('newF').src="image/99.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change19(){
    
    document.getElementById('newF').src="image/jj.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change20(){
    
    document.getElementById('newF').src="image/aa.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change21(){
    
    document.getElementById('newF').src="image/111.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change22(){
    
    document.getElementById('newF').src="image/112.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change23(){
    
    document.getElementById('newF').src="image/113.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change24(){
    
    document.getElementById('newF').src="image/114.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change25(){
    
    document.getElementById('newF').src="image/115.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}

function change26(){
    
    document.getElementById('newF').src="image/116.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change27(){
    
    document.getElementById('newF').src="image/117.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change28(){
    
    document.getElementById('newF').src="image/118.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change29(){
    
    document.getElementById('newF').src="image/210.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change30(){
    
    document.getElementById('newF').src="image/211.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change31(){
    
    document.getElementById('newF').src="image/213.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change32(){
    
    document.getElementById('newF').src="image/214.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change33(){
    
    document.getElementById('newF').src="image/310.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change34(){
    
    document.getElementById('newF').src="image/311.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change35(){
    
    document.getElementById('newF').src="image/312.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}
function change36(){
    
    document.getElementById('newF').src="image/313.jpg";
    popimg.style.display="block";
    contain.style.opacity="0.3";
}

/* ------------------------------------------------------------ */

closer.addEventListener('click', ()=>{
    popimg.style.display="none";
    contain.style.opacity="1";
})
/* const nvx = document.querySelector('.nouveau')
nvx.addEventListener('click',()=>{
    document.querySelector(".close").src="image/aa.jpg";
}) */

const back = document.querySelector('.navbar-image');

back.addEventListener('click', ()=>{
    window.location = "index.php";
})