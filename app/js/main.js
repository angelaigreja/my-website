(function() {
    "use strict"; // Start of use strict

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 900
        }
    })

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });


    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '30px',
            maxFontSize: '60px'
        }
    );

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $(function() {
        for (var i = 0; i < 1; i++){
            $('#proj0').bind('click', function(e) {
                e.preventDefault();
                $('#popup0').bPopup({
                    modalClose: true,
                    opacity: 0.6,
                    positionStyle: 'fixed', //'fixed' or 'absolute'
                    fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
                    followSpeed: 1500 //can be a string ('slow'/'fast') or int
                });
            });
        }
    });

})(); // End of use strict
