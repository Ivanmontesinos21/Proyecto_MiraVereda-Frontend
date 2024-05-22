let crearPelicula=document.getElementById("crear_pelicula");

crearPelicula.addEventListener("submit", event => {
    event.preventDefault();
    addPelicula();
});

expandir_formulario();