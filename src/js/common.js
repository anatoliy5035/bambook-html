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

    //columns equall height
    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }


    setEqualHeight($('.catalog .row'));

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
        $('.popular__slider').slick({
            dots: true
        });

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

    });


    //dropdown
    $('.ui.dropdown').dropdown();

    //accordion catalog
    $(".anchor-title").click(function (e) {
        e.preventDefault();

        // if($(this).hasClass('is-active') && $(this).next().hasClass('is-active')) {
        //     $(this).removeClass('is-active');
        //
        //     $(this).next().hide();
        //
        // }
        // $(this).addClass('is-active');
        // $(this).next().slideToggle();
        // if($(this).parent().find('.accordion__item:hidden')) {
            $(this).toggleClass('is-active');
            $(this).parent().find('.accordion__item').toggle('fast');
        // }

    });

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
    //menu heightt
    setMenuHeight();
    //counter
    $(function() {
        $('.counter').counter();
    });

    //tabs
    $('.tabular.menu .item').tab();

    //rate price
    var html5Slider = document.getElementById('range');

    noUiSlider.create(html5Slider, {
        start: [ 25, 100 ],
        connect: true,
        range: {
            'min': 0,
            'max': 200
        }
    });

    var inputNumberl = document.getElementById('input-number-l');
    var inputNumberh = document.getElementById('input-number-h');

    html5Slider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
            inputNumberl.value = value;
        } else {
            inputNumberh.value = value;
        }
    });

    inputNumberl.addEventListener('change', function(){
        html5Slider.noUiSlider.set([this.value, null]);
    });

    inputNumberh.addEventListener('change', function(){
        html5Slider.noUiSlider.set([null, this.value]);
    });

    //slide arrows offset

    function getslideOffset() {
        if ( $('.book-slider').length ) {
            var elOffset = $('.book-slider .container')[0].offsetLeft;
            $('.book-slider .slick-prev').css('left', elOffset+20 + 'px');
            $('.book-slider .slick-next').css('right', elOffset+20 + 'px');
        }
    }




    $(window).resize(getslideOffset);
    $(window).load(function() {
        getslideOffset()
    });





