let modificarPelicula=document.getElementById("modificar_pelicula");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if(id != null) {
    document.getElementById("id").value=id;
    getPeliculaIdUpdate(id);
      expandir_formulario();
}

modificarPelicula.addEventListener("submit", event => {
    event.preventDefault();
    updatePelicula();
  
});