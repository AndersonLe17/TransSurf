import { Validator } from './Sesion.js';

Validator();

busqueda();
generarDataAsientos();

function busqueda(){
    const url = new URL(window.location.href);
    const codOrigen = url.searchParams.get("codOrigen");
    const codDestino = url.searchParams.get("codDestino");

    rellenarDatosOrigenDestino(codOrigen, codDestino);
}

async function rellenarDatosOrigenDestino(codOrigen, codDestino) {
    const origin = document.querySelector(".col-origen");
    const destiny = document.querySelector(".col-destino");
    await fetch('http://localhost:8080/api/ciudad/'+codOrigen, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(resp => {
        origin.firstElementChild.innerText = resp.nombre;
        origin.children[1].firstElementChild.innerText = resp.nombre;
        origin.children[3].innerText = resp.descripcion;
    });

    await fetch('http://localhost:8080/api/ciudad/'+codDestino, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(resp => {
        destiny.firstElementChild.innerText = resp.nombre;
        destiny.children[1].firstElementChild.innerText = resp.nombre;
        destiny.children[3].innerText = resp.descripcion;
    });
}

function generarDataAsientos() {
    const precioSpan = document.querySelector("#spanCosto"); 
    const asientosSpan = document.querySelector("#spanAsientos"); 
    const modeloSpan = document.querySelector("#spanModelo"); 
    const horarioP = document.querySelector("#pHorario");

    const asientos = JSON.parse(localStorage.getItem('asientos')) || [];
    const montos = asientos.map(i => parseFloat(i.costo));
    const sitios = asientos.map(i => i.numAsiento);
    const total = montos.reduce((i,j) => i+j,0);

    precioSpan.innerText = "S/"+total;
    asientosSpan.innerText = sitios.join(', ');
    modeloSpan.innerText = "BUS "+asientos[0].modelo;
    horarioP.innerText = asientos[0].horario;
}