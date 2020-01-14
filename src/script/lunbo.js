let lunboIndex = 0;
$('#right').on('click', function() {
    next();
})

$('#left').on('click', function() {
    if (lunboIndex > 0) {
        lunboIndex--;
    } else {
        lunboIndex = $('.lunbo_li').length-1;
    }
    $('.lunbo_li').eq(lunboIndex).addClass('show').siblings('li').removeClass('show');
    $('.btnlist_li').eq(lunboIndex).addClass('btnShow').siblings('li').removeClass('btnShow');
})

const btnArr = document.getElementsByClassName('btnlist_li');
for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].onmouseover = function () {
        lunboIndex = i;
        $('.lunbo_li').eq(lunboIndex).addClass('show').siblings('li').removeClass('show');
        $('.btnlist_li').eq(lunboIndex).addClass('btnShow').siblings('li').removeClass('btnShow');
    }
}

let timer = setInterval(() => {
    next()
}, 3000);


function next() {
    if (lunboIndex < $('.lunbo_li').length-1) {
        lunboIndex++;
    } else {
        lunboIndex = 0;
    }
    $('.lunbo_li').eq(lunboIndex).addClass('show').siblings('li').removeClass('show');
    $('.btnlist_li').eq(lunboIndex).addClass('btnShow').siblings('li').removeClass('btnShow');
}

$('.lunbo').on('mouseover', function () {
    clearInterval(timer)
})

$('.lunbo').on('mouseout', function () {
    timer = setInterval(() => {
        next()
    }, 3000);
})
