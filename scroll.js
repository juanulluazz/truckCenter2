//ScrollTrigger
const box = document.getElementById('#ventajas-parrafo')





gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    repeat: 0,
    scrollTrigger: {
      trigger: '.contenedor-animacion',
      start: 'top center',
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
      markers: true,
    },
    y: 50,
    opacity: 0,
    duration: 1,

  });

  gsap.from('.scrollPrueba3', {
    scrollTrigger: {
      trigger: '.detonadorEifs',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    x: -50,
    opacity: 0,
    duration: 1,

  });
  gsap.from('.scrollPrueba2', {
    scrollTrigger: {
      trigger: '.detonadorEifs2',
        start: "top center",
      end: ()=> '+=',
      // markers: true,
    },
    x: -50,
    opacity: 0,
    duration: 1,
  });



      // tl.from('.contenedor-animacion', {
      //   y: '50%',
      //   opacity: 0,
      //   duration: 1,
      //   ease: Power4.easeOut,
      // }
      // );
  

    //   let dos = gsap.to(".animacion", {y:-200}),
    //   at = ScrollTrigger.create({
    //       trigger: ".trigger",
    //       start: "top center",
    //       end: "+=50",
    //       animation: tween
    //     });

        tl.from('.animacion1', {
            // scrollTrigger: {
            //   trigger: '.contenedor-animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .5,
    
          },''
          ).from('.animacion2', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .5,
    
          },'-=0.8' 
          ).from('.animacion3', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' ).from('.animacion4', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' ).from('.animacion5', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' ).from('.animacion6', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.8' ).from('.animacion7', {
            // scrollTrigger: {
            //   trigger: '.animacion',
            //   start: 'top center',
            // },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: .6,
    
        },'-=0.2' );

