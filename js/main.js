$(window).load(function(){
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    
        // Настройка select
    $('.select_checked').on('click', function(){
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
        var value = $(this).attr('data-value');
        $('#select-type').val(value);
        $('.select_checked').text(value);
        $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top - 120 + "px" });
        return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
});