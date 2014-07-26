$(function () {
    var hash = window.location.hash;

    if (hash == '#works') {
        $.scrollTo('.works', 200, {
            offset: -80
        });
    } else if (hash == '#services') {
        $.scrollTo('.services', 300, {
            offset: -80
        });
    }

    $('#nav-works').click(function () {
        $.scrollTo('.works', 200, {
            offset: -80
        });
    });

    $('#nav-services').click(function () {
        $.scrollTo('.services', 300, {
            offset: -80
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 393) {
            $('.navbar').addClass('condensed');
        } else {
            $('.navbar').removeClass('condensed');
        }
    });
});