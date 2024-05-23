<?php
session_start(); //indicamos que vamos a usar sesiones
if($_SESSION['logged']) {
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../css/main.css">

    <title>Leer Pelicula</title>
</head>
    <body>
        <div align="center">
            <div align="left" class="thin-page-500px">
            

                    <a href="../CrudUserFormu/Crear_usuarios.php"  class="button accent">Crear Usuario</a>
                    <a href="../CrudUserFormu/ObtenerUsuarios.php"  class="button accent">Usuarios</a>
                    <a href="../CrudPeliFormu/Crear_pelicula.php"  class="button accent">Crear Pelicula</a>
                    
                <h2>Leer Pelicula</h2>     
                <form action="" method="get" id="obtener_pelicula">

                    <label for="id_ca">ID de Pelicula:</label>
                    <input type="number" id="id_ca" name="id_ca" required><br>
                    
                </form>

                <!--

                El método getPeliculaId() se encarga de mostrar las peliculas a través del id que le
                pasa en el formulario de arriba

                -->

                <button class="button" onclick="getPeliculaId()">Buscar</button> 
                <br><br>

                <div id="peliculas">

                </div>
            </div>

            <script src="../js/main.js"></script>
            <script src="../js/obtenerPelicula.js"></script>

        </div>
    </body>
</html>

<?php
}
else {
    header("Location: ../login/index.php");
}
?>