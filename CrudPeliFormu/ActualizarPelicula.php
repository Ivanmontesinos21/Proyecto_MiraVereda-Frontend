<?php
session_start(); //indicamos que vamos a usar sesiones

?>
<!DOCTYPE html>

<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="/css/main.css">

    <title>Actualizar Pelicula</title>
</head>
<body>
    <div align="center">
        <div align="left" class="thin-page-500px">
        <h2>Actualizar Pelicula</h2>
        <form action="" method="put" id="modificar_pelicula">

           
            <input type="text" id="tipo" name="tipo" hidden><br>


                <label for="id">ID de Usuario:</label>
                <input type="number" id="id" name="id" required><br>
            
                <label for="titulo">titulo:</label>
                <input type="text" id="titulo" name="titulo" required><br>
                
                <label for="descripcion">descripcion:</label>
                <input type="text" id="descripcion" name="descripcion" required><br>
                       
                <label for="genero">Genero:</label>
                <input type="text" id="genero" name="genero" required><br>
                
                <label for="duracion">duracion:</label>
                <input type="number" id="duracion" name="duracion" required><br>
                
                <label for="fecha_estreno">Fecha estreno:</label>
                <input type="date" id="fecha_estreno" name="fecha_estreno" required><br><br>
                
                <label for="nombre_director">Nombre director</label>
                <input type="text" id="nombre_director" name="nombre_director" required><br>
               
                <label for="id_tarifa">Id Tarifa: </label>
                <input type="text" id="id_tarifa" name="id_tarifa"><br>
                
                <label for="precio">precio:</label>
                <input type="number" id="precio" name="precio" required><br>
                
                <label for="version_Idioma">Version Idioma:</label>
                <select name="version_Idioma" id="version_Idioma">
                    
                    <option value="V.E">versión española</option>
                    <option value="V.O.S.E">
                        versión española original subtitulada
                    </option>
                    </select>
                                
                    <label for="id_actores">Id Actores: </label>
                    <input type="text" id="id_actores" name="id_actores" required><br>
                    
                     

                <div id="parte_pelicula">

                    <label for="disponibleHasta">Disponible hasta:</label>
                    <input type="date" id="disponibleHasta" name="disponibleHasta">
                    
                </div> 

                <div id="parte_capitulo" style="display:none">

                    <label for="disponibleDesde">Disponible Desde:</label>
                    <input type="date" id="disponibleDesde" name="disponibleDesde" requiered><br>
                    
                    <label for="idSerie">Id de Serie:</label>
                    <input type="number" id="idSerie" name="idSerie" value="null" requiered><br>

                    <label for="temporada">Temporada:</label>
                    <input type="number" id="temporada" name="temporada" requiered>


                </div>
            
                <input type="submit" class="button accent" value="Crear Pelicula">
        </form>    </div>
</div>

<script src="/js/main.js"></script>
<script src="/js/modificarPelicula.js"></script>

</body>
</html>
