// Menu opener hamburger

$('.menu-open').click(function () {
    $('.js-body').toggleClass('menu-collapse-active')
    // $('.header_wrap').toggleClass('menu-opened');
});

// Плавное перемещение страницы к нужному блоку

$('a.go-to').click(function (e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $('body,html').animate({ scrollTop: destination }, 800);
});

// Модальное окно
$(function () {
    $('.modal_window').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });
});

// Прелоадер
var $preloader = $('#page-preloader'),
    $spinner = $preloader.find('.spinner');
$spinner.fadeOut();
$preloader.delay(350).fadeOut('slow');  


// Слайдер
if ($('.big-slider').length) {
    $('.big-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>'

    });
}




    //   // Функция ymaps.ready() будет вызвана, когда
    // // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // ymaps.ready(init);
    // // function init(){
    //     var myMap = new ymaps.Map("map-yandex", {
    //         center: [59.42125423, 24.72611739],
    //         zoom: 17
    //     // });


