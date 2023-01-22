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