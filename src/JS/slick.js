// slick輪播
$(document).ready(function () {
    $('.slider-item').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0, // 從第三張幻燈片開始（索引從 0 開始，所以 1 表示第二張）
        // autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="custom-prev-arrow"></button>',//自定義箭頭
        nextArrow: '<button type="button" class="custom-next-arrow"></button>',//自定義箭頭
        responsive: [
            {
                breakpoint: 1024, // RWD在1024寬度時切換顯示數量
                settings: {
                    slidesToShow: 2, //一次顯示3個
                    slidesToScroll: 2,//切換下一頁時移動3個
                }
            }, {
                breakpoint: 600,// RWD在600寬度時切換顯示數量
                settings: {
                    slidesToShow: 1,//一次顯示2個
                    slidesToScroll: 1,//切換下一頁時移動2個
                    arrows: false,
                }
            },
        ]
    });
});