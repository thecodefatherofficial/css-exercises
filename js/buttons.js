document.querySelector('#see-levels').addEventListener("click", function(){
    document.querySelector('.finish-game-back').classList.remove('active')
    document.querySelector('.menu').classList.add('active')
    let openLi = document.querySelectorAll('.open');

    for(elem of openLi){
        elem.classList.add('see')
    }
})


document.querySelector('#menu-open').addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('active')
});