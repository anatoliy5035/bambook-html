'use strict';

/*mobile*/
var useragents=['android','astel','audiovox','blackberry','chtml','docomo','ericsson','hand','iphone ','ipod','2me','ava','j-phone','kddi','lg','midp','mini','minimo','mobi','mobile','mobileexplorer','mot-e','motorola','mot-v','netfront','nokia', 'palm','palmos','palmsource','pda','pdxgw','phone','plucker','portable','portalmmm','sagem','samsung','sanyo','sgh','sharp','sie-m','sie-s','smartphone','softbank','sprint','symbian','telit','tsm','vodafone','wap','windowsce','wml','xiino'];

var agt=navigator.userAgent.toLowerCase();
var is_mobile=false;
for(var i=0;i<useragents.length;i++){
    if(agt.indexOf(useragents[i])!=-1){
        is_mobile=true;
        var user_agent=agt; break;
    }
}
/*!mobile*/

$(document).ready(function() {


    // $('.ui.search')
    //     .search({
    //         apiSettings: {
    //             url: '//api.github.com/search/repositories?q={query}'
    //         },
    //         fields: {
    //             results : 'items',
    //             title   : 'name',
    //             url     : 'html_url'
    //         },
    //         minCharacters : 3
    //     });

    //typed
    $(function () {
        $(".prompt").typed({
            strings: ["Гарри Поттер и проклятое дитя"],
            typeSpeed: 50,
            cursorChar: "|",
            showCursor: true,
            loop: true
        });
    });



    // $('.rating')
    //     .rating({
    //         initialRating: 2,
    //         maxRating: 4
    //     });

    //slick
    $('.book-slider').slick();
    $('.popular__slider').slick();
    getslideOffset();

    //scroll slider
    (function () {
        var $frame = $('#basic');
        var $slidee = $frame.children('ul').eq(0);
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 3,
            scrollBar: $('.scrollbar'),
            scrollBy: 0,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: false,
            clickBar: 1
        });

    }());

})

//dropdown
$('.ui.dropdown').dropdown();

//fit heder-menu

function setMenuHeight() {
    var headerHeight = $('.header-top').outerHeight();
    $('.header-menu').css('top', headerHeight+ 'px');
}

$(window).scroll(function(){
    var sticky = $('.header-top');
    var scroll = $(window).scrollTop();
    if (scroll >= 90) {
        sticky.addClass('scrolling');
        // menu.addClass('scrolling-menu');
    }
    else sticky.removeClass('scrolling');
});

//header init
Header.init();
setMenuHeight();

function getslideOffset() {
    var elOffset = $('.book-slider .container')[0].offsetLeft;
    $('.book-slider .slick-prev').css('left', elOffset+20 + 'px');
    $('.book-slider .slick-next').css('right', elOffset+20 + 'px');
}

$(window).resize(getslideOffset);


