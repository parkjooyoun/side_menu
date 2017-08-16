$(function () {

    $('.slide_menu_btn').on('click', function () {
        $('.side_menu').stop().animate({
            left: 0
        }, 500);
        $('.side_shadow').stop().fadeIn(500);
    });

    $('.side_menu .close_btn').on('click',function () {
        $('.side_menu').stop().animate({
            left: -500
        }, 500);
        $('.side_shadow').stop().fadeOut(500);
    });

    $('.side_menu .main_menu > li a').on('click', function () {
        $('.sub_menu').not( $(this).siblings('.sub_menu')).stop().slideUp(500);
        $(this).siblings('.sub_menu').stop().slideToggle(500);
    });

});
