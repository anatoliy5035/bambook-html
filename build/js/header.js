'use strict';

var Header = {

    init: function() {
        this.events();
    },

    fixed: function() {
        jQuery('.header-top').addClass('fixed');
        // jQuery('body').css('paddingTop', jQuery('.header-top').innerHeight()+'px');
    },

    showMenu: function() {
        jQuery('body').addClass('menu-open');
        jQuery('.header-nav .navicon-close').attr('id', 'js-close-menu');
    },

    hideMenu: function() {
        jQuery('body').removeClass('menu-open');
    },

    events: function() {

        if (!is_mobile) {
            Header.fixed();
        }

        jQuery('#js-open-menu').mouseover(function(event) {
            event.preventDefault();
            Header.showMenu();
            setMenuHeight();

        });
        jQuery('.header-menu').mouseleave(function(event) {
            Header.hideMenu();
        })



        jQuery('.header-nav').on('click', '#js-close-menu', function(event) {
            event.preventDefault();
            Header.hideMenu();
        });

        jQuery('.js-menu-toggle').click(function(event) {
            event.preventDefault();

            var element = jQuery(this),
                data_parent = element.data('parent'),
                data_menu = element.data('menu'),
                menu = element.closest(data_parent).find(data_menu);

            element.toggleClass('active');
            menu.slideToggle();
        });

    }
};
