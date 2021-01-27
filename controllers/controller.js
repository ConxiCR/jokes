//habilita popover
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({trigger: "focus"});
});

//crida a Ajax perquè faci saltar tots els acudits i ensenya si dona algun error
$(document).ready(function(){
  $("#idBtnClick").click(function(){
    $.ajax({
      url: "http://api.icndb.com/jokes/random",
      type: 'post',
      dataType: "json",
      success: function(data){
        console.log(data);
        $('[data-content]').text(data.value.joke);
      },
      error: function (xhr, status, error) {
          console.log(xhr); 
          console.log(status); 
          console.log(error);
      }
    });
  });
});

//llamada a la http
fetch('https://api.chucknorris.io/jokes/random',{
    method: 'POST',
    mode: 'cors',
    credentials: 'omit', //per asegurar que el navegador no inclou les credencials a la petició
    cache: 'only-if-cached',
    referrerPolicy: 'no-referrer'
})
    .then( response => {
      console.log('response =', response)
        return response.json(); // server retorna un vàlid JSON
    })
    .then(data => {
      console.log('data = ', data);
    })
    .catch(error => {
      console.log(error);
    });

