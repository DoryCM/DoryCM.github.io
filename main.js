const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

$(".imgMenu").on("click",function(){
    $(".menuhamburguesa").fadeToggle();
});

$(".informatemenu").on("click",function(){
  $(".menudesplegable").fadeToggle();
});

$(".formapartemenu").on("click",function(){
  $(".menudesplegable2").fadeToggle();
});