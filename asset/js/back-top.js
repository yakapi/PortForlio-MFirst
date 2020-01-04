$('.js-backTop').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 1200 }, 1000);
//                                       |    |
//                                       |    --- duration (milliseconds)
//                                       ---- distance from the top
});


jQuery(function(){
    $(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
    if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
    $('.arrowup').css('left','25px'); // Replace à 10pixels de la droite l'image
    } else {
    $('.arrowup').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
    }
    });
    });
    });

    $('.arrowup').click(function(event) {
        // Preventing default action of the event
        event.preventDefault();
        // Getting the height of the document
        var n = $(document).height();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    //                                       |    |
    //                                       |    --- duration (milliseconds)
    //                                       ---- distance from the top
    });
