$(document).ready(function(){
    /* 
        1024이하는 mobile
        
        1025이상은 pc [header .header_sub .gnb .gnb_wrap ul.depth01 > li]
         - 메뉴에 마우스를 오버하면 1. header에 menu_over 클래스 추가 / 2. 1차 메뉴 li에 over 클래스 추가
        
        브라우저의 스크롤을 조금만 내리면 header에 fixed 클래스 추가 / 다시 맨 위로 이동하면 fixed 클래스 삭제
    */
    let scrolling
    let scroll_top
    let window_w
    let mobile_size = 1024
    let pc_mobile


    function scroll_chk(){
        if(pc_mobile == 'pc'){
            scroll_top = 50
        }else{
            scroll_top = 0
        }
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 50){
            $('header').addClass('menu_over')
        }else{//0이거나 0보다 작을 때
            $('header').removeClass('menu_over')
        }
    }


    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })

    $('header .header_sub .gnb .gnb_wrap ul.depth01 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .header_sub .gnb .gnb_wrap ul.depth01 > li').removeClass('over')
            $(this).addClass('over')
        }
    })

})//$(document).ready