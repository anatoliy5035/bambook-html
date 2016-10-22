// 'use strict';
//
// var Header = {
//
//     init: function() {
//         this.events();
//     },
//
//     fixed: function() {
//         jQuery('.header-top').addClass('fixed');
//     },
//
//     hideMenu: function() {
//         $('.header-menu').css({
//             'visibility':'hidden',
//             'opacity':'0'
//         });
//         $('.bg-fix').css({
//             'visibility':'hidden',
//             'opacity':'0'
//         });
//         jQuery('body').removeClass('menu-open');
//
//     },
//
//     events: function() {
//
//             Header.fixed();
//
//         //
//         jQuery('#js-open-menu').mouseover(function(event) {
//
//             event.preventDefault();
//             jQuery('body').addClass('menu-open');
//              $(this).addClass('is-active');
//
//         })
//
//
//         jQuery('.header-nav').on('click', '#js-close-menu', function(event) {
//             event.preventDefault();
//             Header.hideMenu();
//         });
//
//         jQuery('.js-menu-toggle').click(function(event) {
//             event.preventDefault();
//
//             var element = jQuery(this),
//                 data_parent = element.data('parent'),
//                 data_menu = element.data('menu'),
//                 menu = element.closest(data_parent).find(data_menu);
//
//             element.toggleClass('active');
//             menu.slideToggle();
//         });
//
//     }
// };


