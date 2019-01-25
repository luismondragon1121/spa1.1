//<script type="text/javascript">
//$('#section-one-belleza').click(function(){
  //window.onload = function (){
    //var contenedor =document.getElementById('contenedor_carga');
     //contenedor.style.display = 'block'; 
     //contenedor.style.visibility ='hidden';
     //contenedor.style.opacity ='0';
 //}
//});

function cargar()
{
  var contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility ='hidden';
  contenedor.style.opacity ='0';
}

window.onload = cargar;