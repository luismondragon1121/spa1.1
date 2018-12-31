$('.galeria__img').click(function(e){
    var img =e.target.src;
    var siguiente =$('#bt-next');
    var anterior =$('#bt-prev');
    var modal = '<section class="container-fluid"><div class="row"><div class="modal__galeria" id="modal__galeria"><img src="'+ img +'" class="modal__img"><div id="bt-prev">&#60;</div><div id="bt-next">&#62;</div><div class="modal__boton" id="modal__boton">X</div></div></div></section>'
    $('body').append(modal);
    $('#modal__boton').click(function(){
        $('#modal__galeria').remove();
    })
})