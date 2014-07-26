$(function () {
    var hash = window.location.hash;

    if (hash == '#works') {
        $.scrollTo('.works', 200, {
            offset: -50
        });
    } else if (hash == '#services') {
        $.scrollTo('.services', 300, {
            offset: -50
        });
    }

    $('#nav-works').click(function () {
        $.scrollTo('.works', 200, {
            offset: -50
        });
    });

    $('#nav-services').click(function () {
        $.scrollTo('.services', 300, {
            offset: -50
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 360) {
            $('.navbar').addClass('condensed');
        } else {
            $('.navbar').removeClass('condensed');
        }
    });
});