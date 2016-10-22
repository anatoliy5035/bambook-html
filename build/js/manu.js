'use strict';

var MobileMenu = {
    show : function( element ) {
        var container = jQuery('.mobile-inside');

        element.addClass('x close active');
        jQuery('.mobile-container').addClass('show');
        jQuery('body').addClass('overflow');
    },

    hide : function( element ) {
        var container = $('.mobile-inside');

        element.removeClass('x close active');
        jQuery('.mobile-container').removeClass('show');
        jQuery('body').removeClass('overflow');
    },

    events : function() {
        jQuery('.mobile-nav-bt').click(function( event ) {
            event.stopPropagation();
        });

        jQuery('.mobile-container').click(function( event ) {
            event.stopPropagation();
        });

        jQuery('html').click(function() {
            MobileMenu.hide( jQuery('.mobile-nav-bt') );
        });
    }
}

jQuery(function() {
    MobileMenu.events();

    jQuery('#open-mob-menu').click(function() {
        ( jQuery(this).hasClass('active') ) ? MobileMenu.hide( jQuery(this) ) : MobileMenu.show( jQuery(this) );
    });
});