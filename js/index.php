<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="js/bootstrap.js">
  <link rel="stylesheet" href="index.js">
  <link rel="stylesheet" href="js/bootstrap.min.js">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka&family=Rubik:wght@400;700&family=Rufina:wght@700&display=swap" rel="stylesheet">

  <title>Robles Juan Manuel - Web Developer</title>


</head>

<body style="height: 100%; background-color: rgba(0,0,0)">
  
  <!-- header  -->
  <header>
    <video autoplay loop id="bg-video">
      <source src="bg.mp4" type="video/mp4" />

    </video>

  </header>
  <!-- particles  -->
  <div id="particles-js"></div>

  <section class="">
    <div class="">
      <img class="logoestilo" src="logo.jpeg" alt="">
    </div>
    <span class="home_titulo-primario">Hola!</span>
    <h1 class="home_titulo">Soy Juanma Robles</h1>
    <h2><span class="home_titulo-secundario">Full Stack Developer Jr</span></h2>
  </section>

  <!-- NAVBAR  -->

  <div id="navbar">
    <section class="style-navbar">
      <div>
        <p class="navbar_title">
          <a href="#">JR</a>
        </p>
      </div>
      <nav class="style-navbar">
        <ul class="">
          <li class="">
            <a href="#skillset" class="">Habilidades</a>
          </li>
          <li class="">
            <a href="#experience" class="">Proyectos</a>
          </li>
          <li class="">
            <a href="#contactos" class="">Contactos</a>
          </li>
        </ul>
      </nav>

    </section>
  </div>
  <!-- ABOUT ME  -->
  <hr>


  <div class="hero dark-bg-2">
    <div class="hero-content">
      <div class="left">
        <p>Me llamo Juan Manuel Robles, Tengo 23 años y soy web developer junior, me gusta colaborar en equipo, busco un
          puesto de tiempo completo en desarrollo web, donde pueda aplicar mis conocimientos y habilidades. En mi tiempo
          libre hago proyectos personales para seguir mejorando.
        </p>
        <a href="" class="btn"><img src="cv.png" width="100px" style="background-color: white; border-radius: 10px;" alt=""></a>
      </div>
      <div class="right">
        <img style="border-radius: 10px;" src="sobremi-img.png" width="400px">
      </div>
    </div>
  </div>
  <hr>
  <main class="dark-bg">
    <section class="">
    </section>
    <section id="skillset" class="dark-bg">
      <h3 class="home_titulo2 display-1 ">Habilidades</h3>

      <div>
        <div>
          <img src="html.png"> <span class="tooltip">HTML</span>
        </div>
        <div>
          <img src="css.png"> <span class="tooltip">CSS</span>
        </div>
        <div>
          <img src="boostrap.png"> <span class="tooltip">BOOTSTRAP</span>
        </div>
        <div>
          <img src="js.png"> <span class="tooltip">JAVASCRIPT</span>
        </div>
        <div>
          <img src="react.png"> <span class="tooltip">REACT</span>
        </div>
        <div>
          <img src="php.png"> <span class="tooltip">PHP</span>
        </div>
        <div>
          <img src="laravel.png"> <span class="tooltip">LARAVEL</span>
        </div>
        <div>
          <img src="mysql.png"> <span class="tooltip">MYSQL</span>
        </div>
      </div>
    </section>

    <section id="experience" class=" dark-bg">
      <div>
        <h3 class="home_titulo2 display-1">Proyectos</h3>
        <div>
          <a class="eins-modal-button" data-modal-id="myModal">
            <img src="cart-logo.png">
            <h4>HTML-CSS-REACT-JAVASCRIPT</h4>
          </a>
          <a class="eins-modal-button" data-modal-id="myModal">
            <img src="blog.png">
            <h4>HTML-CSS-PHP-LARAVEL-BOOSTRAP</h4>
          </a>
        </div>
      </div>
    </section>
    <hr>
    <!-- Formulario y Contactos  -->
    <div id="contactos" class="d-flex justify-content-center">
      <div class="">
        <div class="row">
          <div class="left d-flex align-items-start">
            <p>Si queres incluirme en algun proyecto, contactame!</p>

            <div id="contactos" class="d-flex justify-content-end">
              <form class="contact-form" method="POST" action="enviar_consulta.php">
                <input name="name" placeholder="Nombre" required>
                <input name="email" placeholder="Correo Electronico" type="email">
                <textarea placeholder="Mensaje" name="mensaje" required minlength="10"></textarea>
                <button class="btn btn-success" style="width:30%;">Enviar</button>
            </div>
          </div>
          </form>
          <div class="d-flex justify-content-center" style="width:100%; position: relative; top:10px;">
          <div class=" bg-danger text-white" style= "width:50%; border-radius: 10px;">
          <?php
          if (isset($_GET['ok'])) {
            echo "<h3>Mensaje enviado!</h3>";
          }
          ?>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <section class="footer d-flex justify-content-center full-width">
      <div class="">
        <div class="full-width">
          <div class="row">
            <p>Contactame por mis redes</p>
          </div>
        </div>

        <div class="full-width">
          <div class="row">
            <p>Podes seguirme</p>
          </div>
        </div>
        <div class="d-flex justify-content-center full-width social-links">
          <div class="justify-content-between">
            <a target="_blank" href="https://twitter.com/juanmarobles_"> <img class="social" src="twitter.png" style="width: 40px;" alt=""></a>
            <a target="_blank" href="https://www.linkedin.com/in/juan-manuel-ferreyra-robles-5605a621b"> <img class="social" src="linkedin.png" style="width: 40px;" alt=""></a>
          </div>
        </div>
        <div class="made-with">
          <div class="row">
            <p>Hecho con &hearts; por Juan Manuel Ferreyra Robles </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- 
                 <a href=""> <img src="linkedin.png" style="width: 50px; background-color: #ff060671;"></a> -->




  <script>
    window.onscroll = function() {
      myFunction()
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  </script>

  <script src="jquery.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/bootstrap.js"></script>
  <script src="particles.js"></script>
  <script src="app.js"></script>

</body>

</html>