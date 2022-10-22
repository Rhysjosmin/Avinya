const layer =document.getElementsByClassName('clouds')
const text =document.getElementById('AVINYA')
const pushover =document.getElementById('pushover')
const bg =document.getElementById('bg')



parallax(window.scrollY)
parallax(window.scrollY)
parallax(window.scrollY)
parallax(window.scrollY)
window.addEventListener("scroll",function(){
    parallax(window.scrollY);
    console.log('e')
});

function parallax(a){
    console.log(a)
    y=a/10
    layer[0].style.transform=`translateX(${0}) translateY(${-(y/8)}%)`
    layer[1].style.transform=`translateX(${0}) translateY(${-y/4}%)`
    text.style.transform=`translateX(${0}%) translateY(${(-y/7)-32}%)`
    layer[2].style.transform=`translateX(${0}) translateY(${-y/2}%)`
    layer[3].style.transform=`translateX(${0}) translateY(${-y/1}%)`
    if(a>800){
        layer
        pushover.style.transform=`translateX(${0}) translateY(${-y/1.5}%)`
    }else{
        pushover.style.transform=`translateX(${0}) translateY(${-y/3}%)`

    }
    if(a>800){

        bg.style.opacity=0;
    }else{
       bg.style.opacity=1;
    }

  


}
