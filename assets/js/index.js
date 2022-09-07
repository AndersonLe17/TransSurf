$(document).ready(function() {

});

let fecha_inicio = document.getElementById('f_inicio');
let fecha_fin = document.getElementById('f_fin');

function setDateInput(e, hoy) {
    e.type = 'date';
    var fecha = new Date();
    if (hoy) {
        e.min = fecha.toISOString().split('T')[0];
        e.value = fecha.toISOString().split('T')[0];
    } else {
        fecha = new Date(fecha_inicio.value);
        fecha.setDate(fecha.getDate() + 1);
        e.min = fecha.toISOString().split('T')[0];
    }
}

$('.owl-carousel').owlCarousel({
    margin:45,
    nav:false,
    rewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        750:{
            items:3
        },
        1000:{
            items:4
        }
    }
})