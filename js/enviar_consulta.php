<?php 
    include('conexion.php');

    $nombre = $_POST ['name'];
    $email = $_POST ['email'];
    $consulta = $_POST ['mensaje'];

    mysqli_query($conexion, "INSERT INTO consultas VALUES ('$nombre', '$email', '$consulta')");

    mysqli_close($conexion);

    header("Location: index.php?ok#contactos");

    
?>