$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }) 
  

  function OpenReadMore(a){
    const ReadMore=document.getElementById(a)
    ReadMore.style.display='block'
  }

  function CloseReadMore(a){
    const ReadMore=document.getElementById(a)
    ReadMore.style.display='none'
  }