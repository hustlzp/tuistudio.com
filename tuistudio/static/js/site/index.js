$(function () {
    var hash = window.location.hash;

    if (hash == '#works') {
        $.scrollTo('.works', 200);
    } else if (hash == '#services') {
        $.scrollTo('.services', 200);
    }

    $('#nav-works').click(function () {
        $.scrollTo('.works', 200);
    });
    $('#nav-services').click(function () {
        $.scrollTo('.services', 300);
    });
});