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
    $('.works img').click(function () {
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