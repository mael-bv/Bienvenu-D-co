const back = document.querySelector('.navbar-image');
const dropdown = document.querySelector('.dropdown2');
const bloc = document.querySelector('.bloc-links');
const btnTop2 = document.querySelector('.btnTop');
const liItems = document.querySelectorAll('.bloc-links li');


back.addEventListener('click', ()=>{
    window.location = "index.php";
})

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



let checkbox = document.querySelector('.check'); 
 
 checkbox.addEventListener('change', e => {

    if(e.target.checked){
        btnS.style.opacity="1";
        btnS.style.cursor="pointer"
    }else {
        btnS.style.opacity="0";
        btnS.style.cursor=""
    }


}); 

liItems.forEach(li =>li.addEventListener('click',toggleDropdown));



