$(document).ready(function () {
    'use strict';

    /*-----------------------------------------------------
    Header Search
    ------------------------------------------------------*/
    if ($('#search-toggle').length > 0) {
        $('#search-toggle').on('click', function (st) {
            st.preventDefault();
            $('#header-search-wrap').slideToggle();
            $(this).find('.fa').toggleClass('fa-search fa-close');
        });
    }

    /*-----------------------------------------------------
    Navbar Toggle for Mobile
    ------------------------------------------------------*/
    function navbarCollapse() {
        if ($(window).width() < 992) {
            $('.dropdown-menu').css('display', 'none');
            $('.dropdown > a').unbind('click');
            $('.dropdown > a').on('click', function (event) {
                event.preventDefault();
                $(this).toggleClass('dropdown-open').siblings('.dropdown-menu').slideToggle();
            });
        } else {
            $('.dropdown > a').unbind('click');
            $('.dropdown-menu').css('display', 'block');
            $('.dropdown > a').removeClass('dropdown-open');
        }
    }
    navbarCollapse();

    /*-----------------------------------------------------
    Slider and Carousel
    ------------------------------------------------------*/
    /*** Banner Slider ***/
    if ($('#banner-slider').length > 0) {
        $('#banner-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 5000,
            stopOnHover: false,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
            pagination: false,
        });
    }

    /*** Recent albul slider ***/
    if ($('#recent-album-carousel').length > 0) {
        $('#recent-album-carousel').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            autoPlay: 5000,
            stopOnHover: false,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
            pagination: false,
        });
    }

    if ($('#latest-album-carousel').length > 0) {
        $('#latest-album-carousel').owlCarousel({
            items: 6,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [991, 4],
            itemsTablet: [767, 3],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            pagination: false,
        });
    }

    if ($('#album-review-carousel').length > 0) {
        $('#album-review-carousel').owlCarousel({
            singleItem: true,
            slideSpeed: 200,
            //autoPlay: 5000,
            stopOnHover: false,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', '<i class=\"fa fa-angle-right\"></i>'],
            pagination: false,
        });
    }

    /*** Artist gallery carousel ***/
    if ($('#artist-gallery-carousel').length > 0) {
        $('#artist-gallery-carousel').owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 2],
            itemsMobile: [479, 1],
            slideSpeed: 200,
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: ['<i class=\"fa fa-angle-left\"></i>', "<i class=\"fa fa-angle-right\"></i>"],
            pagination: false,
        });
    }


    /*-----------------------------------------------------
    Plyr Video
    ------------------------------------------------------*/
    plyr.setup();


    /*-----------------------------------------------------
    Countdown 
    ------------------------------------------------------*/
    

    var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
	TimerCount = (new Date().getFullYear() + 1) + '/01/01',
	template = _.template( jQuery('#main-example-template').html()),
	currDate = '00:00:00:00:00',
	nextDate = '00:00:00:00:00',
	parser = /([0-9]{2})/gi,
	$example = jQuery('#main-example');

	if( $example.data("timer").length ){
		TimerCount = $example.data("timer");	
	}

// Parse countdown string to an object
function strfobj(str) {
	var parsed = str.match(parser),
		obj = {};
	labels.forEach(function(label, i) {
		obj[label] = parsed[i]
	});
	return obj;
}
// Return the time components that diffs
function diff(obj1, obj2) {
	var diff = [];
	labels.forEach(function(key) {
		if (obj1[key] !== obj2[key]) {
			diff.push(key);
		}
	});
	return diff;
}
// Build the layout
var initData = strfobj(currDate);
labels.forEach(function(label, i) {
	$example.append(template({
		curr: initData[label],
		next: initData[label],
		label: label
	}));
});
// Starts the countdown
$('#clock').countdown('2020/08/29', function(event) {
    $(this).html(event.strftime('%D days %H:%M:%S'));
  });


    /*-----------------------------------------------------
    Gallery Isotope
    ------------------------------------------------------*/
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    /*-----------------------------------------------------
    Gallery Isotope Style 2
    ------------------------------------------------------*/
    // init Isotope
    var $grid2 = $('.grid-2').isotope({
        itemSelector: '.col-md-4',
        masonry: {
            columnWidth: '.grid-sizer-2'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid2.isotope('layout');
    });

    // filter items on button click
    $('.grid-2-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');
        $grid2.isotope({
            filter: filterValue
        });
    });

    /*-----------------------------------------------------
    Blog Isotope
    ------------------------------------------------------*/
    // init Isotope
    var $grid = $('.blog-grid').isotope({
        itemSelector: '.blog-grid-item',
        masonry: {
            columnWidth: '.blog-grid-item'
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


    /*-----------------------------------------------------
    Magnific Popup
    ------------------------------------------------------*/
    $('.image-large').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.play-video, .open-map').magnificPopup({
        type: 'iframe'
    });
    $.extend(true, $.magnificPopup.defaults, {
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /*-----------------------------------------------------
    Audio Player
    ------------------------------------------------------*/
    var songs = $('.amplitude-song-container');
    var songObj = [];

    songs.each(function () {
        var songUrl = $(this).data('song');
        var songCover = $(this).data('cover');
        var songName = $(this).find('.song-title').html();
        var songArtist = $(this).find('.song-artist').html();

        var item = {}
        item["name"] = songName;
        item["artist"] = songArtist;
        item["url"] = songUrl;
        item["cover_art_url"] = songCover;

        songObj.push(item);
    });

    Amplitude.init({
        "songs": songObj,
        "playlists": {
            "rock_and_roll": [
				0, 1, 2, 3, 4, 5, 6, 7, 8, 9
			]
        }
    });

    $('.player-track-list-block').slimScroll({
        height: $('#player-one').outerHeight()
    });

    $("#playListBtn").on('click', function(){
        $(".slimScrollDiv").slideToggle("slow");
    });

    // Get the current width of the slider
    var sliderWidth = $('[type=range]').width();
    // Remove previously created style elements
    $('.custom-style-element-related-to-range').remove();
    // Add our updated styling
    $('<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -' + sliderWidth + 'px 0 0 ' + sliderWidth + 'px;}<style/>').appendTo('head');

    /*-----------------------------------
    Contact Form
    -----------------------------------*/
    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['subject'].length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: data,
                success: function () {
                    $('#contactForm .input-success').delay(500).fadeIn(1000);
                    $('#contactForm .input-error').fadeOut(500);
                }
            });
        } else {
            $('#contactForm .input-error').delay(500).fadeIn(1000);
            $('#contactForm .input-success').fadeOut(500);
        }

        return false;
    });

    /*-----------------------------------
    Subscription
    -----------------------------------*/
    $(".subscription").ajaxChimp({
        callback: mailchimpResponse,
        url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpResponse(resp) {
        if (resp.result === 'success') {

            $('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();

        } else if (resp.result === 'error') {
            $('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
        }
    }


    //Window load event
    $(window).on('resize orientationchange', function(){
        navbarCollapse();
    });

});

/*----------------------------------------------------
          FAQ
        ----------------------------------------------------*/
        var topic = $('.topic .open'),
            question = $('.question'),
            liveSearch = $('.live-search-box');

        $(topic).on('click', function () {
            var container = $(this).parents(".topic");
            var answer = container.find(".answer");

            answer.slideToggle(200);

            if (container.hasClass("expanded")) {
                container.removeClass("expanded");
            } else {
                container.addClass("expanded");
            }
        });

        $(question).each(function () {
            $(this).attr('data-search-term', $(this).text().toLowerCase());

        });

        $(liveSearch).on('keyup', function () {
            var searchTerm = $(this).val().toLowerCase();

            $(question).each(function () {
                if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                    $(this).parent().parent().show();
                } else {
                    $(this).parent().parent().hide();
                }
            });
        });
