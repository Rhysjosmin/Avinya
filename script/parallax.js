const layer1 =document.getElementById('l1')
const layer2 =document.getElementById('l2')
const layer3 =document.getElementById('l3')


parallax()
window.addEventListener("scroll",function(){
    parallax(window.scrollY);
    console.log('e')
});

function parallax(a){
    console.log(a)
    y=a
    layer1.style.transform=`translateX(${0}) translateY(${-y*1.1}%)`
    layer2.style.transform=`translateX(${0}) translateY(${-y}%)`
    layer3.style.transform=`translateX(${0}) translateY(${Math.sin(-y/100)*100}%)`

}
