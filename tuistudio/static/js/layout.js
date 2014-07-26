$(function () {
    /* 显示flash message */
    setTimeout(showFlash, 200);
    setTimeout(hideFlash, 2000);

    $('#nav-works').click(function () {
        $.scrollTo('.works', 200);
        return false;
    });

    $('#nav-services').click(function () {
        $.scrollTo('.services', 300);
        return false;
    });
});

/**
 * 显示flash消息
 */
function showFlash() {
    $('.flash-message').slideDown('fast');
}

/**
 * 隐藏flash消息
 */
function hideFlash() {
    $('.flash-message').slideUp('fast');
}