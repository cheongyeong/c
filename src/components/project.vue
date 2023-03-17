<template> 
<div class="projectBg" v-if="anthra == true">
     <img class="closeBtn" src="img/close-white.png" alt="" @click="anthra = false">
     <div  class="Popup">
       <img src="img/antra.png" alt="">
     </div>
</div>
<div class="projectBg" v-if="takju == true">
     <img class="closeBtn" src="img/close-white.png" alt="" @click="takju = false">
     <div  class="Popup">
       <img src="img/takju.png" alt="">
     </div>
</div>
<div class="projectBg" v-if="seomun == true">
     <img class="closeBtn" src="img/close-white.png" alt="" @click="seomun = false">
     <div  class="Popup">
       <img src="img/seomun.png" alt="">
     </div>
</div>

<section class="project-section" id="project">
    <h1 class="bold">PROJECT</h1>
    <div class="anthra">
        <div class="projectTitle">
         <h2>앤트러사이트 커피<br>반응형 웹사이트 리뉴얼 프로젝트</h2>
         <h3>개인 프로젝트</h3>
         <P>저의 첫 개인 프로젝트입니다.
            MySQL과 EJS를 이용한 모듈화와 Node.js를 이용하여 서버 연결을 경험했던 프로젝트입니다. 그 후에
            AWS를 사용하여 사이트를 배포해보았습니다. 데이스베이스 연결을 통해 백엔드 서버를 이해할 수 있었던 프로젝트였습니다.
         </P>
         <div class="projectBtn">
           <div class="more" @click="anthra = true">Mockup</div>
           <div class="more"><a target="_blank" href="https://anthracite-coffee-cheongyeong.koyeb.app">Web Page</a></div>
           <div class="more"><a target="_blank" href="https://github.com/cheongyeong/Anthracite-Coffee.">Git Hub</a></div>
         </div>
        </div>
        <div class="projectPhoto"></div>
    </div>
    <div class="seoulTakju">
        <div class="projectTitle">
         <h2>서울탁주<br>반응형 웹사이트 리뉴얼 프로젝트</h2>
         <h3>팀 프로젝트 / 기여도 33%</h3>
         <P>
            첫 팀 프로젝트입니다. 팀에서 제가 맡은 부분은 이미지 작업과 회사 소개와 공지사항 페이지, 회원가입&로그인 페이지 작업과 유효성검사를 적용하여 구현하였습니다.
            해당 프로젝트 당시 GitHub를 사용하여 팀원들과 데이터를 주고 받아보는 경험도 해보고 서로 소통하며 작업하는 과정 속에서 배울 점도 많았으며 긍정적인 태도를 가지는데에 도움이 많이 된 프로젝트였습니다.   
         </P>
         <div class="projectBtn">
           <div class="more" @click="takju = true">Mockup</div>
           <div class="more"><a target="_blank" href="https://seoultakju-cheongyeong.koyeb.app">Web Page</a></div>
           <div class="more"><a target="_blank" href="https://github.com/cheongyeong/seoulTakju">Git Hub</a></div>
         </div>
        </div>
        <div class="projectPhoto"></div>
    </div>
    <div class="seomun">
        <div class="projectTitle">
         <h2>서문시장야시장<br>반응형 웹사이트 리뉴얼 프로젝트</h2>
         <h3>개인 프로젝트</h3>
         <P>
            HTML, CSS, JS의 기초를 다질 수 있었던 프로젝트 입니다. 교육 과정에서 공통 주제로 진행했던 프로젝트로 타 사이트를 벤치마킹하여 제작하였습니다.
            HTML의 구조를 이해할 수 있었고 Swiper-Slide 등 라이브러리를 처음 접할 수 있었던 프로젝트였습니다. 
         </P>
         <div class="projectBtn">
           <div class="more" @click="seomun = true">Mockup</div>
           <div class="more"><a target="_blank" href="http://cheongyeonggg.dothome.co.kr/seomun/main.html">Web Page</a></div>
           <div class="more"><a target="_blank" href="https://github.com/cheongyeong/seomunNightMarket">Git Hub</a></div>
         </div>
        </div>
        <div class="projectPhoto"></div>
    </div>


</section>

</template>

<script>
export default {
  data () {
    return {

      anthra : false,
      seomun : false,
      takju : false,
  
    
  }
}
}

</script>