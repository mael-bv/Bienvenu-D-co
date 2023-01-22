const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",

    })
})