    'use strict';

    //slide arrows offset

    // swich elements

    function swapElements(elm1, elm2) {
        var parent1, next1,
            parent2, next2;

        parent1 = elm1.parentNode;
        next1   = elm1.nextSibling;
        parent2 = elm2.parentNode;
        next2   = elm2.nextSibling;

        parent1.insertBefore(elm2, next1);
        parent2.insertBefore(elm1, next2);
    }

    var swElems = $(".book-slider__right-block");

    if($(window).width()<800) {
        for(var i = 0; i<swElems.length; i++) {
            swapElements($(".book-slider__right-block")[i], $(".book-slider__left-block")[i]);

        }
    }


    //columns equall height
    function setEqualHeight(columns)
    {
        var tallestcolumn = 0;
        columns.each(
            function()
            {
                var currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }

    if($(window).width()>923) {
        setEqualHeight($('.catalog .row'));
    }

    /*!mobile*/

    $(document).ready(function() {
        

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


        //slick

        $('.book-slider').slick({
            responsive: [
                { breakpoint: 480,
                    settings: {
                        arrows: false
                    }}
            ]
        });
        $('.popular__slider').slick({
            dots: true,
            rows: 2,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                { breakpoint: 767,
                    settings: {
                    rows: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }}
            ]
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
                dynamicHandle: false
            });

        }());

        (function () {
            var $frame = $('#nonitembased');
            var $wrap = $frame.parent();
            // Call Sly on frame

            $frame.sly({
                speed: 300,
                activatePageOn: 'click',
                scrollBar: $wrap.find('.scrollbar-mobi'),
                mouseDragging: 1,
                touchDragging: 1,
                scrollBy: 100,
                dragHandle: 1,
                dynamicHandle: 1
            });
        }());

        function getslideOffset() {
            if ( $('.book-slider').length ) {
            var elOffset = $('.book-slider .container')[0].offsetLeft;
            $('.book-slider .slick-prev').css('left', elOffset+20 + 'px');
            $('.book-slider .slick-next').css('right', elOffset+20 + 'px');

            }
        }

        getslideOffset();

        $(window).resize(getslideOffset);

        // initialize tooltipster on text input elements
        // tooltip
        $('.forget-but').mouseover(function (e) {
            $('body').addClass('tooltips');
        });
        $('.forget-but').tooltipster({
            trigger: 'hover'
        });

        var width = $(window).width();
        if( width < 767) {
            $('.order-form .cook_write').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'bottom'

            });
        }
        else{
            $('.order-form input').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'right'

            });
        }

        if( width < 767) {
            $('.signup input').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'bottom'

            });
        }
        else{
            $('.signup input').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'right'

            });
        }

        if( width < 767) {
            $('.reg-form input').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'bottom'

            });
        }
        else{
            $('.reg-form input').tooltipster({
                trigger: 'custom',
                onlyOne: false,
                delay: 0,
                position: 'right'

            });
        }



        // initialize validate plugin on the form

        jQuery.extend(jQuery.validator.messages, {
            required: "Заполните выделенное поле",
            email: "Неправильный формат email",
            password: "Слишком простой пароль",
            minlength: jQuery.validator.format("Пожалуйста введите миннимум {0} символов."),
            digits: "Введите только цифры",
        });

        $('.signup').validate({
            onsubmit: true,
            errorPlacement: function (error, element) {
                $('body').addClass('tooltips');
                $(element).parent('div').removeClass('sc');
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
                $(element).parent('div').addClass('sc');
            },
            rules: {
                login: {
                    required: true,
                },
                password: {
                    required: true,
                    minlength: 5
                },

            },
            submitHandler: function (form) {
                return false;
            }
        });

        $('.reg-form').validate({
            onsubmit: true,
            errorPlacement: function (error, element) {
                $('body').addClass('tooltips');
                $(element).parent('div').removeClass('sc');
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
                $(element).parent('div').addClass('sc');
            },
            rules: {
                login: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 5
                },

            },
            submitHandler: function (form) {
                return false;
            }
        });

        $('.order-form').validate({
            onsubmit: true,
            errorPlacement: function (error, element) {
                $('body').addClass('tooltips');
                $(element).parent('div').removeClass('sc');
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
                $(element).parent('div').addClass('sc');
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                fio: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    minlength: 8,
                    digits: true
                },
                usloviya: {
                    required: true,
                },
                waypay: {
                    required: true,
                    minlength: 5
                }
            },

            messages: {
                usloviya: "Согласитесь с условиями"
            },

            submitHandler: function (form) {
                return false;
            }
        });


        $('.order-form').validate({
            onsubmit: true,
            errorPlacement: function (error, element) {
                $(element).parent('div').removeClass('sc');
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
                $(element).parent('div').addClass('sc');
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                fio: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    minlength: 8,
                    digits: true
                },
                usloviya: {
                    required: true,
                },
                waypay: {
                required: true,
                minlength: 5
                }
            },
            submitHandler: function (form) {
                return false;
            }
        });

    });

    //popup
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true,
        callbacks: {
            open: function () {
                $('.mfp-wrap').scroll(function (e) {
                    $(this).find('.cook_write').tooltipster('reposition');
                })
                $.magnificPopup.instance.close = function () {
                    $('.signup input, .reg-form input').tooltipster('hide');
                    $.magnificPopup.proto.close.call(this);
                }
            }
        }
    });

    $('.close-but').click(function(){
        $.magnificPopup.close();
    });

    //show-hide inputs
    $('.show_fild').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle('fast');

    })

    //fit slide width
    if($(window).width()<767) {
        var winWidth = $(window).width()-30;
        $('.frame .col-inline-4').width(winWidth);

    }


    //dropdown
    $('.ui.dropdown').dropdown();

    //accordion catalog
    $(".anchor-title").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.accordion__item').toggle('fast');

    });

    if($(window).width()>767) {
        $(window).scroll(function(){
            var sticky = $('.header-top');
            var scroll = $(window).scrollTop();
            if (scroll >= 90) {
                sticky.addClass('scrolling');
                // menu.addClass('scrolling-menu');
            }
            else sticky.removeClass('scrolling');
        });
    }

    $('.search-but').click(function (e) {
        e.preventDefault();
        $(this).parents('.search-form').toggleClass('open');
        $('body').toggleClass('open-search')
    })




    // $(".cook_white").on('input', function () {
    //     $('.mfp-wrap').scroll(function (e) {
    //         alert('fd');
    //     })
    // });

    // $("input").on('input', function () {
    //     $('.mfp-wrap').scroll(function (e) {
    //         // $('.tooltipster-base').tooltipster('hide');
    //         alert('f')
    //     })
    // });

    //
    // $('.mfp-wrap').scroll(function (e) {
    //     alert('lfk')
    // })



    //header init
    Header.init();

    //counter
    $(function() {
        $('.counter').counter();
    });

    //tabs
    $('.tabular.menu .item').tab();

    // rate price

    if($('#input-number-l').length && $('#input-number-h').length) {
        
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
    }




    /* scroll effect */






