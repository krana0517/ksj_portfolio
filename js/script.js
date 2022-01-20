$(document).ready(function(){

////////////////////////////////////////////

///// 스킬명 효과

$(".skills > ul > li").hover(function () {

    $(this)
        .find(".skill_name")
        .stop()
        .slideDown();
}, function () {
    $(this)
        .find(".skill_name")
        .stop()
        .slideUp();
});

////////////////////////////////////////////

///// 제목 효과

const text = document.querySelectorAll('.text');
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
    TweenMax.to(el, 1, {
        z: 1 * (i + 8)
    });

});

document.addEventListener('mousemove', e => {
    text.forEach((el, i) => {
        TweenMax.to(el, 0.5, {
            x: (e.clientX - halfX) * (i + 1) * 0.01,
            y: (e.clientY - halfY) * (i + 1) * 0.01
        });

    });
});

////////////////////////////////////////////

//  포트폴리오 탭

$(".pf_list li")
    .eq(0)
    .click(function () {

        $(".pf_list li").removeClass("on");
        $(".pf_in div")
            .stop()
            .fadeOut(500);

        $(this).addClass("on");
        $(".pf_edit")
            .stop()
            .fadeIn(500);

    });

$(".pf_list li")
    .eq(1)
    .click(function () {

        $(".pf_list li").removeClass("on");
        $(".pf_in div")
            .stop()
            .fadeOut(500);

        $(this).addClass("on");
        $(".pf_web")
            .stop()
            .fadeIn(500);

    });

$(".pf_list li")
    .eq(2)
    .click(function () {

        $(".pf_list li").removeClass("on");
        $(".pf_in div")
            .stop()
            .fadeOut(500);

        $(this).addClass("on");
        $(".pf_brand")
            .stop()
            .fadeIn(500);

    });

$(".pf_list li")
    .eq(3)
    .click(function () {

        $(".pf_list li").removeClass("on");
        $(".pf_in div")
            .stop()
            .fadeOut(500);

        $(this).addClass("on");
        $(".pf_info")
            .stop()
            .fadeIn(500);

    });

////////////////////////////////////////////

//  탑 버튼

$(document).ready(function () {

    $(window).scroll(function () {

        var num = $(this).scrollTop();

        if (num >= 300) {
            $(".btn_top")
                .stop()
                .fadeIn();

        } else {
            $(".btn_top")
                .stop()
                .fadeOut();
        }

    });

    $(".btn_top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

}); 

////////////////////////////////////////////


    //// 레이어 팝업 효과

$(".btn, .btn_2").click(function(){

    $(".pop_up_bg").stop().fadeOut(500);

});

    // editorial 1번 열

    $(".edit_first > li").eq(0).click(function(){

        $(".osaka").stop().fadeIn(500).scrollTop(0);
    
});

    $(".edit_first > li").eq(1).click(function(){

        $(".rtbp").stop().fadeIn(500).scrollTop(0);

});

$(".edit_first > li").eq(2).click(function(){

    $(".wine_color").stop().fadeIn(500).scrollTop(0);

});

    // editorial 2번 열
    

    $(".edit_second > li").eq(0).click(function(){

    $(".giger").stop().fadeIn(500).scrollTop(0);

});





});