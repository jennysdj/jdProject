$('nav li').not('.last').on('click', function (){
    $(this).addClass('active').siblings('li').removeClass('active');
    let $top = $('.louceng').eq($(this).index()).offset().top;
    $('html').animate({
        scrollTop: $top
    });
});

$('.last').on('click', function () {
    $('html').animate({
        scrollTop: 0
    });
});

let $top=$(window).scrollTop();
if($top>=260){
    $('.elevator').show();
}else {
    $('.elevator').hide();
}
$(window).on('scroll', function () {
    $top = $(window).scrollTop();
    if($top>=260){
        $('.elevator').show();
    }else {
        $('.elevator').hide();
    }

    $('.louceng').each(function (index, element){
        let $loucengtop = $('.louceng').eq(index).offset().top + $('.louceng').eq(index).height() / 2;
        if ($loucengtop > $top) { 
            $('.elevator li').not('.last').removeClass('active'); 
            $('.elevator li').not('.last').eq(index).addClass('active');
            return false; 
        }
    });
});
