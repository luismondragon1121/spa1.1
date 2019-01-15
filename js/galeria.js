$('.galeria__img').click(function(e){
    var img =e.target.src;
    var modal = '<section class="container-fluid"><div class="row"><div class="modal__galeria" id="modal__galeria"><img src="'+ img +'" class="modal__img" onclick="cambiar(this);"><div id="bt-next" onclick="next(this);">></div><div id="bt-prev">&#60;</div><div class="modal__boton" id="modal__boton">X</div></div></div></section>'
    $('body').append(modal);
    $('#modal__boton').click(function(){
        $('#modal__galeria').remove();  
    })
})


	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
	var imagenes=Array("img/galeria/1.jpg","img/galeria/2.jpg",
     'img/galeria/3.jpg',
     'img/galeria/6.jpg',
     'img/galeria/7.jpg',
     'img/galeria/8.jpg',
     'img/galeria/13.jpg',
     'img/galeria/14.jpg',
     'img/galeria/16.jpg',
     'img/galeria/19.jpg');
	var imagenVisible=0;
 
	// Función que cambia la imagen actual por la siguiente
	function cambiar(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}

	function next(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible =0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
	console.log(next);
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log();
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}

