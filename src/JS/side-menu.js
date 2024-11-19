// pin側選單，滾動監聽
// $(document).ready(function () {
//     var sectionIds = $('.pin-menu').find('.pin-menu-input').find('a.input');

//     $(document).scroll(function () {
//         sectionIds.each(function () {

//             var container = $(this).attr('href');
//             var containerOffset = $(container).offset().top;
//             var containerHeight = $(container).outerHeight();
//             var containerBottom = containerOffset + containerHeight;
//             var scrollPosition = $(document).scrollTop();

//             if (scrollPosition < containerBottom - 160 && scrollPosition >= containerOffset - 160) {
//                 $(this).addClass('active');
//             } else {
//                 $(this).removeClass('active');
//             }


//         });
//     });
// });
$(document).ready(function () {
    var sectionIds = $('.pin-menu').find('.pin-menu-input').find('a.input');

    // 點擊事件處理，讓選單點擊後對應段落捲動到頁面頂端
    sectionIds.on('click', function (e) {
        e.preventDefault(); // 避免預設行為

        var targetSection = $($(this).attr('href')); // 獲取目標段落
        var offset = $(window).width() <= 767 ? 100 : 80; // 在767以下改為100
        $('html, body').animate({
            scrollTop: targetSection.offset().top - offset // 調整為使段落位於頂部，並加入 offset
        }, 500); // 設置滾動時間
    });

    $(document).scroll(function () {
        sectionIds.each(function () {
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            var offset = $(window).width() <= 767 ? 110 : 120; // 在767以下改為110

            if (scrollPosition < containerBottom - offset && scrollPosition >= containerOffset - offset) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});