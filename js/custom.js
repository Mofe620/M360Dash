let hide = document.querySelector('#hideBar');
let sideBar = document.querySelector('.sidebar');
var rotate = 0;
hide.addEventListener('click', function(){
    sideBar.classList.toggle('hide');
    rotate += 180;
    hide.style.transform = `rotate(${rotate}deg) scale(1.5)`;
})