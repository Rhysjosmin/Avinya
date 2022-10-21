const sun=document.getElementById('sun');
const body = document.querySelector('body')
movesun()
window.addEventListener("scroll",function(){
    movesun(window.scrollY);
});

function movesun(a){
    y=a/(window.innerHeight/150)
    sun.style.transform=`translateX(${y}%) translateY(${(Math.sin(y/100+3.14/2)*100)-50}%)`
}


//move linearly on x 
//x= window position y  remapped 
//y=sin(window pos y/x  ==where the value in sin is from 0 to pi/2)