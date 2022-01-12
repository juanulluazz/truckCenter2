$(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    let scrollTop = $(window).scrollTop();
   
    if(scrollTop >= 50 ){
    //   document.getElementById('test').style.opacity='0.5';

      document.getElementById('nav-scroll').style.backgroundColor='rgba(124, 42, 21, 0.9)';
    }
  
   if(scrollTop <= 50 ){
      document.getElementById('nav-scroll').style.backgroundColor='#7c2a15'

    }
  
  });



const ham = document.querySelector(".ham");
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});