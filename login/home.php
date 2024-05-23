<?php
session_start(); //indicamos que vamos a usar sesiones

if($_SESSION['logged']) {
?>
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" type="text/css" href="../css/main.css">
    </head>
    <body>
        <div align="center">
            <div align="left" class="thin-page-600px">

                <a href="../CrudUserFormu/Crear_usuarios.php"  class="button accent">Crear Usuario</a>
                <a href="../CrudUserFormu/ObtenerUsuarios.php"  class="button accent">Usuarios</a>
                <a href="../CrudPeliFormu/Crear_pelicula.php"  class="button accent">Crear Pelicula</a>
                <a href="../CrudPeliFormu/ObtenerPelicula.php"  class="button accent">Cátalogo</a>

                <h1>PÁGINA DE BIENVENIDA</h1>

            </div>
        </div>

        <script src="../js/main.js"></script>
        <script src="../js/login.js"></script>

    </body>
</html>

<?php
}
else {
    header("Location: index.php");
}
?>