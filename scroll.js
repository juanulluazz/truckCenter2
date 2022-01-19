//ScrollTrigger
// const box = document.getElementById('#ventajas-parrafo')






gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    repeat: 0,
    scrollTrigger: {
      trigger: '.contenedor-animacion',
      start: 'top center',
      // end: ()=> '+=',
      // markers: true,
    },
});


const pl = gsap.timeline({
  repeat: 0,
  scrollTrigger: {
    trigger: '.animacion-tercera',
    start: 'top center',
    end: ()=> '+=',
    // markers: true,

  },
});



// let tween = gsap.from(".scrollPrueba", {x:-50, duration: 1, opacity: 0,}),
//     st = ScrollTrigger.create({
//         trigger: ".quinta-parte",
//         start: "top center",
//         end: "+=50",
//         animation: tween
//       });


gsap.from('.boton2', {
    scrollTrigger: {
      trigger: '.disparadorBoton2',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    y: 50,
    opacity: 0,
    duration: 1,

  });






// Lineas de tiempos




        tl.from('.animacion1', {
            // scrollTrigger: {
            //   trigger: '.contenedor-animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 1.5,
            stagger: .5,
    
          },
          '-=1');


          
        tl.from('.animacion2', {
          // scrollTrigger: {
          //   trigger: '.contenedor-animacion',
          //   start: 'top center',
          // },
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: .5,
  
        },
        '-=1');

          
        
        tl.from('.animacion3', {
          // scrollTrigger: {
          //   trigger: '.contenedor-animacion',
          //   start: 'top center',
          // },
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: .5,
  
        },
        '-=1');
 
        tl.from('.animacion4', {
          // scrollTrigger: {
          //   trigger: '.contenedor-animacion',
          //   start: 'top center',
          // },
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: .5,
  
        },
        '-=1');


        tl.from('.animacion5', {
          // scrollTrigger: {
          //   trigger: '.contenedor-animacion',
          //   start: 'top center',
          // },
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: .5,
  
        },
        '-=1');



// linea-pl


pl.from('.animacion-p1', {

  x: -100,
  opacity: 0,
  duration: 1.5,
  stagger: .5,

},
'-=1');

pl.from('.animacion-p0', {

  opacity: 0,
  duration: 1.5,
  stagger: .5,

},
'-=0.5');



pl.from('.animacion-p2', {

x: +100,
opacity: 0,
duration: 1.5,
stagger: .5,

},
'-=1');

pl.from('.animacion-p02', {

  opacity: 0,
  duration: 1.5,
  stagger: .5,

},
'-=0.5');



pl.from('.animacion-p3', {
x: +100,
opacity: 0,
duration: 1.5,
stagger: .5,

},
'-=1');

pl.from('.animacion-p03', {

opacity: 0,
duration: 1.5,
stagger: .5,

},
'-=0.5');




pl.from('.animacion-p4', {

x: +100,
opacity: 0,
duration: 1.5,
stagger: .5,

},
'-=0.5');





pl.from('.animacion-p5', {

  x: -100,
  opacity: 0,
  duration: 1.5,
  stagger: .5,
  
  },
  '-=0.5');

  pl.from('.animacion-p6', {

    x: -100,
    opacity: 0,
    duration: 1.5,
    stagger: .5,
    
    },
    '-=0.5');


    
  pl.from('.animacion-p7', {

    x: -100,
    opacity: 0,
    duration: 1.5,
    stagger: .5,
    
    },
    '-=0.5');

    
  pl.from('.animacion-p8', {

    x: +100,
    opacity: 0,
    duration: 1.5,
    stagger: .5,
    
    },
    '-=0.5');
    pl.from('.animacion-p9', {

      x: -100,
      opacity: 0,
      duration: 1.5,
      stagger: .5,
      
      },
      '-=0.5');
      pl.from('.animacion-p10', {

        x: +100,
        opacity: 0,
        duration: 1.5,
        stagger: .5,
        
        });





