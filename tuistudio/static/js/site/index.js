$(function () {
    var hash = window.location.hash;

    // 根据hash进行滑动
    if (hash == '#works') {
        scrollTo('.works', 200);
    } else if (hash === '#services') {
        scrollTo('.services', 300);
    } else if (hash === '#tech') {
        scrollTo('.tech', 300);
    } else if (hash === '#contact') {
        scrollTo('.contact', 300);
    } else if (hash === '#process') {
        scrollTo('.process', 300);
    }

    // 点击导航栏滑动
    $('#nav-works').click(function () {
        scrollTo('.works', 200);
    });

    $('#nav-services').click(function () {
        scrollTo('.services', 300);
    });

    $('#nav-tech').click(function () {
        scrollTo('.tech', 300);
    });

    $('#nav-process').click(function () {
        scrollTo('.process', 300);
    });

    $('#nav-contact').click(function () {
        scrollTo('.contact', 300);
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
     * @param duration
     */
    function scrollTo(selector, duration) {
        $.scrollTo(selector, duration, {
            offset: -50
        });
    }
});