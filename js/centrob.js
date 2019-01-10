$(document).ready(function(){
   $('.cir_b a:first').addClass('active');
    $('.circulos-secciones_bienestar article').hide();
    $('.circulos-secciones_bienestar article:first').show();
    
    $('.cir_b a').click(function(){
       $('ul.cir_b li a').removeClass('active');
        $(this).addClass('active');
        $('.circulos-secciones_bienestar article').hide();
        
        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});

$('.variety-selector > a , .spa-gallery-selectors > a').on('click',function(){
    $(this).addClass("active").siblings().removeClass('active');
});