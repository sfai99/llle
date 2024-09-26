$(document).ready(function(){
  const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

    anchors: ['home', 'profile', 'project', 'thanks'],
    autoScrolling:true, /* 한페이지씩 스크롤 */
    scrollHorizontally: true,

    verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
    
    scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

    //responsiveWidth: 1024, /* fullpage를 적용시키지 않을 모바일 사이즈 */

    afterLoad: function(origin, destination, direction, trigger){
      if(destination.index == 0){
        $('header .gnb ul li').removeClass('active')
        $('header .gnb ul li:nth-child(1)').addClass('active')
      }else if(destination.index == 1){
        $('header .gnb ul li').removeClass('active')
        $('header .gnb ul li:nth-child(2)').addClass('active')
      }else if(destination.index == 2){
        $('header .gnb ul li').removeClass('active')
        $('header .gnb ul li:nth-child(3)').addClass('active')
      }
			if(destination.index == 3){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('마지막');
        $('header').hide();
			}else{
        $('header').show();
      }
		},

  });//fullpage

})//document.ready