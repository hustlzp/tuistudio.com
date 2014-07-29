$(function () {
    var hash = window.location.hash;

    // 根据hash进行滑动
    if (hash == '#works') {
        scrollTo('.works');
    } else if (hash === '#services') {
        scrollTo('.services');
    } else if (hash === '#tech') {
        scrollTo('.tech');
    } else if (hash === '#contact') {
        scrollTo('.contact');
    } else if (hash === '#process') {
        scrollTo('.process');
    }

    // 点击导航栏滑动
    $('#nav-works').click(function () {
        scrollTo('.works');
    });

    $('#nav-services').click(function () {
        scrollTo('.services');
    });

    $('#nav-tech').click(function () {
        scrollTo('.tech');
    });

    $('#nav-process').click(function () {
        scrollTo('.process');
    });

    $('#nav-contact').click(function () {
        scrollTo('.contact');
    });

    // 下滑到一定距离，压缩nav
    $(window).scroll(function () {
        if ($(window).scrollTop() > 360) {
            $('.navbar').addClass('condensed');
        } else {
            $('.navbar').removeClass('condensed');
        }
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