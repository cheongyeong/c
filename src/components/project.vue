<template> 

<div class="projectBg" v-if="lms == true">
     <img class="closeBtn" src="img/close-white.png" alt="" @click="lms = false">
     <div  class="Popup">
       <img src="img/lms.png" alt="">
     </div>
</div>
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


<section class="project-section" id="project">
    <h1 class="bold">PROJECT</h1>

    <div class="lms">
        <div class="projectPhoto"></div>
        <div class="projectTitleBox">
         <h2>더퓨처<br>LMS 학습 관리 시스템 프로젝트</h2>
         <h3>팀 프로젝트
         <br>개발 기간 : 2023.05.31. - 2023.07.12
         <br>팀 구성 및 담당 역할 : 6명 / PL
         <br>담당 구현 기능 : 장비관리, 시험관리, 시험응시</h3>
         <h5>사용 기술</h5> 
         <div class="projectSkilImg">
              <img src="img/java.png" alt="">
              <img src="img/spring.png" alt="">
              <img src="img/sql.png" alt="">
              <img src="img/js-2.png" alt="">
              <img src="img/jq.png" alt="">
              <img src="img/apache.png" alt="">
              <img src="img/ajax.png" alt="">
         </div>
         <P>자바 스트링 프레임워크를 사용하여 진행한 IT교육기관의 강사진과 수강생들이 사용하는 학습 관리 시스템입니다.
              List형으로 데이터베이스에서 Ajax를 통해 JSP에 목록을 출력하고 사용자 유형에 따라 CRUD가 가능하도록 구현하였습니다.
              <br>
              <br>
                처음 접해보는 주제와 자바 언어였지만 팀원들과 다양한 아이디어를 제시하고 소통하여 서로 도와주며 점차 완성되어가는 결과물을 보고 뿌듯했습니다. 전에 진행했던 프로
                젝트들과는 달리 테이블 설계부터 프로젝트를 매일 팀원들과 일정을 공유하며 개발을 
                진행했기에 실무에 가까운 프로젝트를 경험했다고 생각합니다. 
        </P>
         <div class="projectBtn">
           <div class="more" @click="lms = true">Veiw</div>
           <div class="more"><a target="_blank" href="https://github.com/cheongyeong/TheFuture_newdeal4lms.git">Git Hub</a></div>
         </div>
        </div>
    </div>
    <div class="seoulTakju">
        <div class="projectTitleBox">
            <h2>서울탁주<br>반응형 웹사이트 리뉴얼 프로젝트</h2>
            <h3>팀 프로젝트
            <br>개발 기간 : 작업기간 2022.11.01 - 2022.12.22
            <br>팀 구성 및 담당 역할 : 3명 / 팀원
            <br>담당 구현 기능 : 공지사항, 보도자료, 회원가입, AboutUs 페이지</h3>
            <h5>사용 기술</h5> 
            <div class="projectSkilImg">
                  <img src="img/node.png" alt=""> 
                  <img src="img/express.png" alt="">
                  <img src="img/sql.png" alt="">
                  <img src="img/js-2.png" alt="">
                  <img src="img/jq.png" alt="">
                  <img src="img/aws.png" alt="">
            </div>
            
            <div class="projectBtn">
              <div class="more" @click="takju = true">Mockup</div>
              <div class="more"><a target="_blank" href="https://seoultakju-cheongyeong.koyeb.app">Web Page</a></div>
              <div class="more"><a target="_blank" href="https://github.com/cheongyeong/seoulTakju">Git Hub</a></div>
            </div>
        </div>
        <div class="line"></div>
         <div class="projectPhoto">
          <div></div>
              <P>
                개발자로서 처음 해본 팀 프로젝트로 팀원들과 주제선정부터 기획, 개발까지 진행한 프로젝트입니다.
                서로 맡은 부분은 일정 안에 끝낼 수 있게 책임감을 가지게 되었고 서로 테스트 과정에서 오류를 잡아가며
                기능을 구현해 나아가면서 뿌듯함을 느꼈습니다. 디자인부터 설계까지 모두 팀원들과의 의견을 조율하여 정하였기에
                소통의 중요성도 알게 되었습니다.<br>
                  <br>또한 개발 중에는 구현하고자하는 기능을 구글 검색을 통하여 다른 사람의 소스를 나만의 소스로 만들어 나아가는
                  능력도 키워나가며 다른 프로젝트에도 적용시킬 수 있었습니다. 해당 프로젝트 당시 GitHub를 사용하여 팀원들과 데이터를 주고 받아보며
                  서로 소통하며 작업하는 과정 속에 협업에 필요한 태도를 가지는데에 도움을 얻었고 
                  AWS 사용으로 직접 사이트를 배포 하면서 새로운 지식을 습득하며 좋은 결과물을 보며 큰 성취감과 뿌듯함을 느낀 프로젝트였습니다.
              </P>
         </div>
    </div>
    <div class="anthra">
        <div class="projectTitleBox">
            <h2>앤트러사이트 커피<br>반응형 웹사이트 리뉴얼 프로젝트</h2>
            <h3>개인 프로젝트
            <br>개발 기간 : 2022.10.20 - 2022.12.02
            <br>구현 기능 : 메인, ABOUT, SHOP 샘플신청게시판, 공지사항 </h3>
            <h5>사용 기술</h5> 
            <div class="projectSkilImg">
                  <img src="img/node.png" alt=""> 
                  <img src="img/express.png" alt="">
                  <img src="img/sql.png" alt="">
                  <img src="img/js-2.png" alt="">
                  <img src="img/jq.png" alt="">
                  <img src="img/aws.png" alt="">
            </div>
              <P>사이트 선정부터 UI 설계 및 구현까지 혼자서 해낸 첫 프로젝트로 결과물을 보고 가장 뿌듯했던 프로젝트입니다.
                화면 구조를 설계하면서 다양한 라이브러리 사용과 HTML, CSS, JavaScript의 기초를 더 탄탄히 다질 수 있었습니다. 
                <br>
                <br>또한 mySQL과 ejs를 이용한 모듈화와 Node.js를 사용하여 npm 방식의 서버 연결을
                    경험 할 수 있었고 데이터베이스 사용으로 백엔드 서버를 이해할 수 있었습니다.
                    해당 프로젝트를 진행하면서 새로운 기능들을 배우고 구현함으로써 개발자로서 
                    성장하고 있는 모습에 성취감을 느꼈습니다.
            </P>
            <div class="projectBtn">
              <div class="more" @click="anthra = true">Mockup</div>
              <div class="more"><a target="_blank" href="https://anthracite-coffee-cheongyeong.koyeb.app">Web Page</a></div>
              <div class="more"><a target="_blank" href="https://github.com/cheongyeong/Anthracite-Coffee.">Git Hub</a></div>
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

      lms : false,
      anthra : false,
      takju : false,
  
    
  }
}
}

</script>