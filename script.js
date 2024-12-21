
const precio = 400000;


const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const botonIncrementar = document.querySelectorAll("button")[0];
const botonDecrementar = document.querySelectorAll("button")[1];


let cantidad = 0;


function actualizarTotal() {
    const total = cantidad * precio;
    totalSpan.innerHTML = total;
}


botonIncrementar.addEventListener("click", () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad; 
    actualizarTotal(); 
});


botonDecrementar.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad; 
        actualizarTotal(); 
    }
});
