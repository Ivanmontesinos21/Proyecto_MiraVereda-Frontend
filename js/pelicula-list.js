const peliculaList = document.getElementById("pelicula-list");

function getPeliculas() {
    fetch(`http://${ipUrl}:8080/api/pelicula/`)
        .then(res => res.json())
        .then(peliculas => {
            for(let pelicula of peliculas) {
                console.log(pelicula);
                let peliElem = document.createElement("div");
                peliElem.className = "card-panel fill-horizontal";
                let titulo = document.createElement("h3");
                titulo.innerText = pelicula.titulo;
                peliElem.appendChild(titulo);
                let tipo = document.createElement("p");
                tipo.innerText = pelicula.tipo;
                peliElem.appendChild(tipo);
                let duracion = document.createElement("p");
                duracion.innerText = "Duración: " + segToDuracion(pelicula.duracion);
                peliElem.appendChild(duracion);
                let fechaEstreno = document.createElement("p");
                fechaEstreno.innerText = "Estreno: " + intToDate(pelicula.fechaEstreno);
                peliElem.appendChild(fechaEstreno);
                peliculaList.appendChild(peliElem);
            }
        });
}

getPeliculas();