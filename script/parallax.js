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
    y=a/500
    var separation=5;

    for(i=0;i<layer.length;i++){
        layer[i].style.transform=`translateX(${0}) translateY(${-(y/(5-(i/separation)))}%)`
 
    }
  //  layer[0].style.transform=`translateX(${0}) translateY(${-(y/8)}%)`
  //  layer[1].style.transform=`translateX(${0}) translateY(${-y/4}%)`
    text.style.transform=`translateX(${0}) translateY(${-(y/(5-(11/separation))+20)}%)`
  //  layer[2].style.transform=`translateX(${0}) translateY(${-y/2}%)`
  //  layer[3].style.transform=`translateX(${0}) translateY(${-y/1}%)`
    if(a>600){
    
        pushover.style.transform=`translateX(${0}) translateY(${-y/1.2}%)`
    }else{
        pushover.style.transform=`translateX(${0}) translateY(${-(y/(5-(12/separation)))}%)`

    }
    if(a>650){

       // bg.style.opacity=0;
    }else{
       bg.style.opacity=1;
    }



}
