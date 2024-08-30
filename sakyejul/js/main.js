$(document).ready(function(){
    
  /* 브라우저 넓이가 1024이하면 모바일, 이상이면 pc */
  let pc_mobile //현재상태가 pc인지 모바일인지를 저장
  let window_w //브라우저 넓이 저장

  function resize_chk(){
      window_w = $(window).width()
      if(window_w > 1024){ /*1024보다 크면 -pc면 */
          pc_mobile = 'pc'
      }else{ /*모바일이면*/
          pc_mobile = 'mobile'
      }
      console.log(pc_mobile)
  }
  //처음에 로딩 됐을 때 실행
  resize_chk()
  //브라우저가 리사이즈 될 때마다 실행
  $(window).resize(function(){
      resize_chk() 
  })

  /* 
      페이지가 스크롤되면 header에 fixed 클래스를 추가
      다시 맨 위로 올라가면 header에 fixed 클래스 삭제  */
  
  let scrolling

  function scroll_chk(){
      scrolling = $(window).scrollTop()
      console.log(scrolling)
      if(scrolling > 0){
          $('header').addClass('fixed')
      }else{
          $('header').removeClass('fixed')
      }
  }//function

  //문서가 처음 로딩되었을때 1번 실행
  scroll_chk()

  $(window).scroll(function(){
      //브라우저를 스크롤 할때마다 실행
      scroll_chk()
  })//window.scroll

      /*
      메뉴에 마우스를 올리면
      header에 menu_over라는 클래스를 추가
      마우스를 오버한 li에먼 on이라는 클래스를 추가
      메뉴 :header .gnb .gnb_wrap ul.depth1 > li
      
      --> 다른 메뉴(li)에 마우스를 오버하면 이전에 오버했던 메뉴의 on클래스 삭제 
          (모든 메뉴의 on클래스를 삭제했다가 오버한 내꺼만 on클래스 추가)
      --> header에서 마우스를 아웃하면 그때 menu_over라는 클래스 삭제
          모든 메뉴에서 on클래스 삭제
      */

  $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
      if(pc_mobile == 'pc'){
          $('header').addClass('menu_over')
          $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
          $(this).addClass('on')
      }
      
  })
  $('header').on('mouseleave', function(){
      if(pc_mobile == 'pc'){
          $('header').removeClass('menu_over')
          $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
      }    
  })

  $('header .gnb .gnb_open').on('click', function(){
      if(pc_mobile == 'mobile'){
          $('header').addClass('mobile_open')

      }
  })
  $('header .gnb .gnb_open').on('click', function(){
      if(pc_mobile == 'mobile'){
          $('header').removeClass('mobile_open')

      }
  })

  const book_swiper = new Swiper('.book .tab .sub_tab .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
    spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
    breakpoints: {
      640: {  /* 640px 이상이 되면 적용 */
          spaceBetween: 24, 
      },
    },
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
  });//book_swiper

 
  
  const subTabNav = $(".sub_tab_nav a"); // 서브 탭 앵커 태그
  const tabNav = $(".tab_nav a"); // 메인 탭 앵커 태그
  const tabNavLi = $('.tab_nav li'); // 메인 탭 리스트

  // 서브 탭 클릭 이벤트 핸들러
  subTabNav.on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");

      // 해당 서브 탭 활성화
      $(target).addClass("active").siblings('.active').removeClass("active");
      $(this).closest('li').addClass("active").siblings().removeClass("active");
  });

  // 메인 탭 클릭 이벤트 핸들러
  tabNav.on("click", function (e) {
      e.preventDefault();
      const target = $(this).attr("href");

      // 해당 메인 탭 활성화
      $(target).addClass("active").siblings('.active').removeClass("active");
      $(this).closest('li').addClass("active").siblings().removeClass("active");

      // 서브 탭 유지 또는 첫 번째 서브 탭 활성화
      const subTabActive = $(target).find('.sub_tab_nav li.active');
      if (!subTabActive.length) {
          $(target).find('.sub_tab_nav li:first-child a').trigger('click');
      } else {
          subTabActive.find('a').trigger('click');
      }
  });

  // 페이지 로드 시 첫 번째 탭 활성화
  const mainTabActive = tabNavLi.filter('.active');
  if (!mainTabActive.length) {
      tabNavLi.first().find('a').trigger('click');
  } else {
      mainTabActive.find('a').trigger('click');
  }

})//document