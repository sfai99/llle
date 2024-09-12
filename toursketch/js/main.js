$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade",
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.visual .swiper .btn_next',
            prevEl: '.visual .swiper .btn_prev',  
        },
    });
    //visual_swiper

    const travel01_swiper = new Swiper('.travel01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade",
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.travel01 .btn_next',
            prevEl: '.travel01 .btn_prev',  
        },
    });
    //travel01_swiper

    const travel02_swiper = new Swiper('.travel02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade",
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.travel02 .btn_next',
            prevEl: '.travel02 .btn_prev',  
        },
    });
    //travel02_swiper

    $('.news .tab > ul > li').on('click', function(){
        $('.news .tab > ul > li').removeClass('on') /*모든 li에 있는 on클래스를 모두 지웠다가*/
        $(this).addClass('on') /*click한 li에만 다시 on클래스를 줌*/
   })

})//document