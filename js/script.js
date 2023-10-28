$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
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




function show(){
    document.getElementById("messagebox").style.display = "block";
}

function hide(){
    document.getElementById("messagebox").style.display = "none";
}