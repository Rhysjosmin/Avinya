const layer =document.getElementsByClassName('clouds')
const text =document.getElementById('AVINYA')



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
        layer[4].style.transform=`translateX(${0}) translateY(${-y/1}%)`
    }else{
        layer[4].style.transform=`translateX(${0}) translateY(${-y/2}%)`

    }
    


}
