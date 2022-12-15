const primerV = document.getElementById('primerV');
const segundoV = document.getElementById('segundoV');
const botonesNum = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(primerV,segundoV);

botonesNum.forEach(boton => {
    boton.addEventListener('click',() =>{
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click',() => display.computar(boton.value))
});