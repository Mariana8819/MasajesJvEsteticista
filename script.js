// for header

    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');    
}

//for window scroll

window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
    
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    window.onload = () => {
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    }
}

//for home section

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
  });

  //for feature section

  var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },        
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
      },
  });

  //for blogs section

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },        
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
      },
  });

  
//   //for professional section

//   var swiper = new Swiper(".professional-slider", {
//     spaceBetween: 20,
//     grabCursor: true,
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//       },

//       breakpoints:{
//         0:{
//             slidesPerView: 1,
//         },        
//         768:{
//             slidesPerView: 2,
//         },
//         991:{
//             slidesPerView: 3,
//         },
//       },
//   });

// // //func para mostarr detalle de los masajes al hacer click en Leer Mas
// // function mostrarServicio(titulo, descripcion) {
// //     document.getElementById('descripcion-masaje').innerText = descripcion;
// // }

// //func para manejar el envio del formulario
// function enviarFormulario(event) {
//     event.preventDefault();

//     //obtengo los valores del form
//     var nombre= document.getElementById('nombre').value;
//     var correo= document.getElementById('correo').value;
//     var telefono= document.getElementById('telefono').value;

//     document.getElementById('mensaje-confirmacion').innerText = `Gracias, ${nombre}! Tu inscripción ha sido recibida. Te contactaremos a tu correo (${correo}) o teléfono (${telefono}).`;

//     document.getElementById('formulario-inscripcion').reset();
// }

//enviar form-inscripcion por whatsApp
function enviarWhatsApp() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value.trim();
    var masaje = document.getElementById('masaje').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var telefono = document.getElementById('telefono').value.trim();

    // Validar que todos los campos estén completos
    if (!nombre || !masaje || !correo || !telefono) {
        alert("Por favor complete todos los campos del formulario");
        return;
    }

    // Crear el mensaje con saltos de línea codificados como %0A
    var mensaje = 
        "¡Hola! Mi nombre es " + nombre + " y estoy interesad@ en inscribirme para el masaje de " + masaje + ".%0A" +
        "Mi correo es " + correo + " y mi número de teléfono es " + telefono + ".%0A" +
        "¿Podrías brindarme más información? ¡Gracias!";

    // Crear el enlace de WhatsApp
    var numeroWhatsApp = '5491145282951';
    var url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

    // Crear enlace temporal y simular clic
    var a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
