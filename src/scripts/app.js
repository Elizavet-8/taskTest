document.addEventListener("DOMContentLoaded", function () {
    //бургер меню
    $('.header__burger, .overlay').click(function () {
        $('.header').toggleClass('show');
        $('body').toggleClass('overflow');
    });
    $("#nav").on("click", ".header-nav__link", function (event) {
        $('.header').removeClass('show');
        $('body').removeClass('overflow');
    });
})



