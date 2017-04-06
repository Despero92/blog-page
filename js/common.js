$( document ).ready( function () {
    var menu = $( "#nav ul" ),
        hamburger = $( "#hamburger" );
    $( ".hamburger" ).click( function () {
        $( this ).toggleClass( "is-active" );
        menu.slideToggle();
        return false;
    } );
    $( window ).resize( function () {
        var w = $( window ).width();
        if ( w > 767 && menu.is( ':hidden' ) ) {
            menu.removeAttr( 'style' );
        }
    } );

    var arrow = document.getElementById( "arrow_up" );
    $( arrow ).hide();
    $( function () {
        $( window ).scroll( function () {
            if ( $( this ).scrollTop() > 500 ) {
                $( arrow ).fadeIn();
            } else {
                $( arrow ).fadeOut();
            }
        } );
        $( arrow ).click( function () {
            $( "body,html" ).animate( {
                scrollTop: 0
            }, 800 );
            return false;
        } );
    } )
} );


