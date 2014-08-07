$(function () {
    var hash = window.location.hash;

    // 根据hash滑动
    if (hash !== '') {
        var targetClass = "." + hash.split('#')[1];
        scrollTo(targetClass);
    }

    // 点击导航栏滑动
    $('.navbar-nav li').click(function () {
        var targetClass = "." + $(this).data("scroll-target");
        scrollTo(targetClass);
    });

    // 点击work图标滑动
    $('.work-logo').click(function () {
        var targetClass = "." + $(this).data("scroll-target");
        scrollTo(targetClass);
    });

    // 下滑到一定距离，压缩nav
    $(window).scroll(function () {
        if ($(window).scrollTop() > 360) {
            $('.navbar').addClass('condensed');
        } else {
            $('.navbar').removeClass('condensed');
        }
    });

    // 根据屏幕大小适配banner高度
    //    var navHeight = $('.navbar').outerHeight();
    //    var bannerHeight = $(window).height() - navHeight;
    //    var bannerTextHeight = $('.banner-text').height();
    //    $('.banner').css({
    //        'height': bannerHeight + 'px',
    //        'padding-top': (bannerHeight - bannerTextHeight) * 0.45 + 'px'
    //    });

    // Google Maps
    var map;
    var styleArray = [
        {"featureType": "landscape", "stylers": [
            {"hue": "#F1FF00"},
            {"saturation": -27.4},
            {"lightness": 9.4},
            {"gamma": 1}
        ]},
        {"featureType": "road.highway", "stylers": [
            {"hue": "#0099FF"},
            {"saturation": -20},
            {"lightness": 36.4},
            {"gamma": 1}
        ]},
        {"featureType": "road.arterial", "stylers": [
            {"hue": "#00FF4F"},
            {"saturation": 0},
            {"lightness": 0},
            {"gamma": 1}
        ]},
        {"featureType": "road.local", "stylers": [
            {"hue": "#FFB300"},
            {"saturation": -38},
            {"lightness": 11.2},
            {"gamma": 1}
        ]},
        {"featureType": "water", "stylers": [
            {"hue": "#00B6FF"},
            {"saturation": 4.2},
            {"lightness": -63.4},
            {"gamma": 1}
        ]},
        {"featureType": "poi", "stylers": [
            {"hue": "#9FFF00"},
            {"saturation": 0},
            {"lightness": 0},
            {"gamma": 1}
        ]}
    ];

    function initialize() {
        var location = new google.maps.LatLng(36.983546158641936, -86.4347916841507);
        var marker_location = new google.maps.LatLng(36.983546158641936, -86.4347916841507);
        var mapOptions = {
            zoom: 18,
            scrollwheel: false,
            mapTypeControl: false,
            center: location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: styleArray
        };

        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
            map: map,
            icon: '/static/image/logo_sm.png',
            position: marker_location
        });
    }

    // 显示地图
    $('.show-map').click(function () {
        $('.map-wap').show();
        scrollTo('.contact');
        initialize();
    });

    // 隐藏地图
    $('.hide-map').click(function () {
        $('.map-wap').hide();
    });

    // 显示地图
    $('.show-phone').click(function () {
        $('.phone-wap').show();
        scrollTo('.contact');
    });

    // 隐藏地图
    $('.hide-phone').click(function () {
        $('.phone-wap').hide();
    });

    /**
     * A wapper of jQuery.scrollTo
     * @param selector
     */
    function scrollTo(selector) {
        $.scrollTo(selector, 300, {
            offset: -50
        });
    }
});