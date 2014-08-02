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
    var navHeight = $('.navbar').outerHeight();
    var bannerHeight = $(window).height() - navHeight;
    var bannerTextHeight = $('.banner-text').height();
    $('.banner').css({
        'height': bannerHeight + 'px',
        'padding-top': (bannerHeight - bannerTextHeight) * 0.45 + 'px'
    });

    // Google Maps
    var map;
    var styleArray = [
        {"featureType": "water", "stylers": [
            {"color": "#46bcec"},
            {"visibility": "on"}
        ]},
        {"featureType": "landscape", "stylers": [
            {"color": "#f2f2f2"}
        ]},
        {"featureType": "road", "stylers": [
            {"saturation": -100},
            {"lightness": 45}
        ]},
        {"featureType": "road.highway", "stylers": [
            {"visibility": "simplified"}
        ]},
        {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [
            {"visibility": "off"}
        ]},
        {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [
            {"color": "#444444"}
        ]},
        {"featureType": "transit", "stylers": [
            {"visibility": "off"}
        ]},
        {"featureType": "poi", "stylers": [
            {"visibility": "off"}
        ]}
    ];

    function initialize() {
        var location = new google.maps.LatLng(36.9685219, -85.68080429999999);
        var marker_location = new google.maps.LatLng(36.9685219, -86.48080429999999);
        var mapOptions = {
            zoom: 9,
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
            position: marker_location
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

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