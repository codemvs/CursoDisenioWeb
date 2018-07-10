$(document).ready(function(){
    //Efecto menu
    $(".menu a").each(function(index, elem){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        },1000+(index * 500));
    });

    //Efecto header
    if($(window).width()>800){
        var $textos = $('header .textos');
        $textos.css({
            opacity:0,
            marginTop:0
        });
        $textos.animate({
            opacity:1,
            marginTop:"-52px"
        },1000);
    }

    //scroll elementos menu
    var acercaDe = $("#acerca-de").offset().top,
        platillos = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top;

    animateScroll("#btn-acerca-de",acercaDe);    
    animateScroll("#btn-menu", platillos);
    animateScroll("#btn-galeria", galeria);
    animateScroll("#btn-ubicacion", ubicacion);

    function animateScroll(target, top){
        $(target).on("click",function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:top -110
            }, 600);
        });
    }    
    
});