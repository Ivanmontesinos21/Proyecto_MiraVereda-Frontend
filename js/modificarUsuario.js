let modificarUsuario=document.getElementById("modificar_usuario");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if(id != null) {
    document.getElementById("id").value=id;
    getClienteIdUpdate(id);
}

modificarUsuario.addEventListener("submit", event => {
    event.preventDefault();
    updateCliente();
});