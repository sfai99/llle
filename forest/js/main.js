$(document).ready(function(){
  const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    navigation: true, /* 오른쪽에 각 페이지의 paging */
    navigationPosition: 'left', /* 위치 */
    navigationTooltips: ['Main', '나무심기', '활동소개', '활동이야기'],
    showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */

    autoScrolling:true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
    
    scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

    afterLoad: function(origin, destination, direction, trigger){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
      if((destination.index == 1)||(destination.index == 2)||(destination.index == 3)||(destination.index == 4)){
        $('header').addClass('dark')
      }else{
        $('header').removeClass('dark')
      }
    },

    responsiveWidth: 1024 /* fullpage를 적용시키지 않을 모바일 사이즈 */
  });
})//$(document).ready