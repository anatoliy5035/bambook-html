'use strict';

var MobileMenu = {
    show : function( element ) {
        element.addClass('x close active');
        jQuery('.mobile-container').addClass('show');
        jQuery('body').addClass('overflow');
        $('.mobile-nav-bt').addClass('disable');
    },

    hide : function( element ) {
        element.removeClass('x close active');
        jQuery('.mobile-container').removeClass('show');
        jQuery('body').removeClass('overflow');
        $('.mobile-nav-bt').removeClass('disable');
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

    jQuery('#open-mob-menu').click(function(e) {
        e.preventDefault();
        ( jQuery(this).hasClass('active') ) ? MobileMenu.hide( jQuery(this) ) : MobileMenu.show( jQuery('.mobile-container') );
    });
});


var Catalog = {
    show : function( element ) {
        // var container = jQuery('.mobile-inside');
        element.addClass('close active');
        jQuery('.catalog-aside').addClass('show');
        jQuery('body').addClass('overflow');
    },

    hide : function( element ) {
        // var container = $('.mobile-inside');
        element.removeClass('close active');
        jQuery('.catalog-aside').removeClass('show');
        jQuery('body').removeClass('overflow');
    },

    events : function() {
        jQuery('.mob-filter').click(function( event ) {
            event.preventDefault();
            event.stopPropagation();
        });
    }
}

jQuery(function() {
    Catalog.events();

    jQuery('.mob-filter').click(function() {

        ( jQuery(this).hasClass('active') ) ? Catalog.hide( jQuery(this) ) : Catalog.show( jQuery(this) );
    });
});

function setHeighMobi() {
    var footerHeight = $('.mobile-menu__footer').outerHeight();
    var headerHheight = $('.mobile-menu__header').outerHeight();
    var screenHeight = $(window).height();

    if ($(window).width() < 1025) {
        var calc = screenHeight - headerHheight - footerHeight;
        $('.mobile-menu__body').css('height', calc + 'px');
    }
};

setHeighMobi();

$(window).resize(setHeighMobi);

function resizeCatalog() {
    var headerHeight  = $('.header-top').outerHeight();
    $('.catalog-aside').css('margin-top', headerHeight + 'px');

}

if($(window).width()<767) {
    resizeCatalog();
    $(window).resize(resizeCatalog);
}


