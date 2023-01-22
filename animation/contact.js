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





const slindingImg = document.getElementById("map");
window.addEventListener('scroll', () =>{
 const {scrollTop, clientHeight}=
 document.documentElement;

 const topElem = slindingImg.getBoundingClientRect().top;

 if(scrollTop > (scrollTop + topElem).toFixed()-clientHeight *0.80){
 slindingImg.style.opacity='1';
 slindingImg.style.transform='translateX(0%)';
 slindingImg.style.transition='.8s'; }
})



const  title =document.querySelector(".titre h1");
const txt = "CONTACT"
function typewriter(word, index){
    if(index < word.length){
        setTimeout(()=>{
            title.innerHTML +=`<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        },300)
    }
}
setTimeout(()=>{
    typewriter(txt, 0)
},500)

const back = document.querySelector('.navbar-image');

back.addEventListener('click', ()=>{
    window.location = "index.php";
})


function initMap() {

    const uluru = { lat: 48.86915969848633, lng: 2.7064599990844727 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });

    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }