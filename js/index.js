$(function () {
    // 1.dailyservice sprite 
    var is = $('.dailyservice i');
    var x = 16;
    var y = 14;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            is[j + i * 4].style.backgroundPosition = -(j * 63 + x) + 'px' + ' ' + -(i * 71 + y) + 'px'
        }
    }

    //sidenav

    let boxtop = $('.recomm').offset().top - 100;
    var flag = true;
    // index = 0
    $(window).scroll(function () {
        if ($(document).scrollTop() >= boxtop) {
            $('.sidenav').fadeIn()

            if (flag) {
                $('.floor-items').each(function (index, domobj) {
                    if (Math.ceil($(document).scrollTop()) >= Math.floor($(domobj).offset().top)) {
                        $('.sidenav li').eq(index).addClass('current').siblings().removeClass()
                    }
                })
            }
        } else {
            $('.sidenav').fadeOut()
        }
    })

    $('.sidenav li').click(function () {
        flag = false
        $(this).addClass('current').siblings().removeClass()
        let index = $(this).index()
        let top = Math.floor($('.floor-items').eq(index).offset().top)
        $('body, html').stop().animate({
            scrollTop: top
        }, function () {
            flag = true
        })
    })
})