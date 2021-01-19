$(document).ready(function(){
    
    $("#jokeButton").click(function(e){
      $.getJSON("http://api.icndb.com/jokes/random", function(data){
        $.each(result, function(i, field){
          $("#joke").html(data.value.joke);
        });
      });
    });
  });
  $(function() {
    dame_chile();
    $(boton).click(function (e) {
      dame_chile();
    });
  
    function dame_chile(){
      $.getJSON('http://api.icndb.com/jokes/random', function(data){			
        $("#chiste").html(data.value.joke);
      });
    }
  });
  !DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="estilos.css" />
    <script src="jquery-3.4.1.min.js"></script>
    <script src="script.js" async="async"></script>
    <link href="https://fonts.googleapis.com/css?family=Lexend+Deca|Noto+Serif&display=swap" rel="stylesheet">

    <title>Chistes Chuck Norris</title>
  </head>
  <body>
    <h1>Chistes</h1>
    <img id="chuck" src="chuck.jpg" alt="" srcset="">

    <div id="cuadro">

        <p id="chiste"></p>
    </div>
    <button id="boton">Chuck?</button>

    <h1>jokes</h1>
  <p id="demo"></p>
  <button type="button" id="jokeButton">Return joke</button> 
  
    
    
    
        
  </body>
</html>