$(document).ready(function(){

    //book_swiper
    const book_swiper101 = new Swiper('.book .tab .sub_tab#sub_tab101 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        breakpoints: {
            700: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1100: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 24,
                slidesPerView: "auto",
            },
        },
        scrollbar: {
            el: ".book .tab .sub_tab#sub_tab101 .scrollbar .swiper-scrollbar",
            dragSize: 0,
            hide: false,
            draggable: true,
        },
    });//book101_swiper
    const book_swiper102 = new Swiper('.book .tab .sub_tab#sub_tab102 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        breakpoints: {
            700: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1100: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 24,
                slidesPerView: "auto",
            },
        },
        scrollbar: {
            el: ".book .tab .sub_tab#sub_tab102 .scrollbar .swiper-scrollbar",
            hide: false,
            dragSize: 0,
            draggable: true,
        },
    });//book102_swiper
    const book_swiper201 = new Swiper('.book .tab .sub_tab#sub_tab201 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        breakpoints: {
            700: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1100: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 24,
                slidesPerView: "auto",
            },
        },
        scrollbar: {
            el: ".book .tab .sub_tab#sub_tab201 .scrollbar .swiper-scrollbar",
            hide: false,
            dragSize: 0,
            draggable: true,
        },
    });//book201_swiper
    const book_swiper202 = new Swiper('.book .tab .sub_tab#sub_tab202 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2,
        spaceBetween: 16,
        loop: false,
        breakpoints: {
            700: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            1100: {
                spaceBetween: 20,
                slidesPerView: 4,
            },
            1400: {
                spaceBetween: 24,
                slidesPerView: "auto",
            },
        },
        scrollbar: {
            el: ".book .tab .sub_tab#sub_tab202 .scrollbar .swiper-scrollbar",
            hide: false,
            dragSize: 0,
            draggable: true,
        },
    });//book202_swiper
  
    //tab
    const subTabNav = $(".sub_tab_nav a");
    const tabNav = $(".tab_nav a");
    const tabNavLi = $('.tab_nav li');

    subTabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");

        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");
    });

    tabNav.on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");

        $(target).addClass("active").siblings('.active').removeClass("active");
        $(this).closest('li').addClass("active").siblings().removeClass("active");

        const subTabActive = $(target).find('.sub_tab_nav li.active');
        if (!subTabActive.length) {
            $(target).find('.sub_tab_nav li:first-child a').trigger('click');
        } else {
            subTabActive.find('a').trigger('click');
        }
    });
    const mainTabActive = tabNavLi.filter('.active');
    if (!mainTabActive.length) {
        tabNavLi.first().find('a').trigger('click');
    } else {
        mainTabActive.find('a').trigger('click');
    }//tab

    //display_swiper
    const display_swiper = new Swiper('.display .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 30, 
            },
            1024: {  /* 1024px 이상이 되면 적용 */
                spaceBetween: 24,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//display_swiper

    //youtube_swiper
    const youtube_swiper = new Swiper('.youtube .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 22, 
            },
        },

        navigation: {
            nextEl: '.btn_wrap .btn_next',
            prevEl: '.btn_wrap .btn_prev',
        },
        centeredSlides: true,
        loop: true,
    });//youtube_swiper

})//document