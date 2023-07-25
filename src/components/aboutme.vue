<template>
    <div class="bg-black" v-if="resume == true">
       <div class="page-bg">
        <a class="downloadBtn" href="file/resume.pdf" download>Save</a>
        <div class="close" @click="resume = false">
          <img src="img/close.png" alt="">
        </div>
        <img class="resume" src="img/resume.jpg">
       </div>
    </div>

    <section class="about-section" id="about">
      <div class="about-wrap">
        <div class="left-keyword">
          <span>도전적</span>
          <span>꼼꼼함</span>
          <span>의사소통</span>
        </div>
        <div class="emoticon">
          <img src="img/profile.png" alt="">
        </div>
        <div class="right-keyword">
          <span>긍정마인드</span>
          <span>적응력</span>
        </div>
      </div>
        
      <div class="about-box">
         <div class="aboutText">
            <div class="about">
                <h4 class="bold">ABOUT</h4>
                <p>박천경</p>
                <p>1995.10.06</p>
                <p>010-2423-7734</p>
                <p>cheongyeonggg@gmail.com</p>
            </div>

            <div class="edu">
              <h4 class="bold">EDUCATION</h4>
              <p>2023.05 - 2023.07 <br> 기업 맞춤형 JAVA 웹 개발자 양성 과정 수료</p>
              <p>2022.09 - 2023.02 <br> 뷰(Vue) 활용 프론트엔드 웹 개발자 양성 과정 수료</p>
              <p>2014.03 - 2017.02 <br> 명지전문대학 산업디자인과 졸업</p>           
            </div>
        </div>

        <div class="skils">
            <div class="skil">
                <h4 class="bold">SKILS</h4>
                <div class="skilBox">
                  <div class="front">
                    <span>Front-end</span>
                    <div class="skilImg">
                      <div>
                        <img src="img/vue.png" alt="">
                        <img src="img/html-1.png" alt="">
                        <img src="img/css-1.png" alt="">
                        <img src="img/js-2.png" alt="">
                        <img src="img/jq.png" alt="">
                      </div>
                      <p>Vue.js 를 사용하여 해당 포트폴리오를 제작하였습니다.
                        <br>HTML과 CSS, JavaScript를 사용하여 사이트를 제작 가능합니다. </p>
                    </div>
                  </div>
                  <div class="back">
                           <span>Back-end</span>
                    <div class="skilImg">
                      <div>
                               <img src="img/java.png" alt="">
                               <img src="img/spring.png" alt="">
                               <img src="img/sql.png" alt="">
                               <img src="img/apache.png" alt="">
                               <img src="img/node.png" alt="">
                      <p>서버를 구성하고 프로젝트 내에 게시판을 구현한 경험이 있습니다.
                        <br>또한 자바 스프링워크 프레임을 사용하여 시스템을 개발한 경험이 있습니다.
                         </p>

                      </div>
                    </div>
                  </div>
                  <div class="etc">
                    <span>etc</span>
                    <div class="skilImg">
                      <div>
                        <img src="img/github.png" alt="">
                        <img src="img/aws.png" alt="">
                        <img src="img/figma.png" alt="">
                      </div>
                      <p>GitHub를 사용하여 협업 경험이 있으며,
                        <br>AWS를 활용하며 사이트를 배포한 경험이 있습니다. 
                        <br>피그마를 사용해 협업 및 UI/UX 디자인 제작이 가능합니다.</p>
                    </div>
                  </div>
                </div>
  
            </div>  
        </div>

    </div>

        <div class="buttonWrap">
           <div class="resume-button button" type="button" @click="resume = true">
           이력서 바로보기</div>
           <div class="git-button button" type="button">
             <a target="_blank" href="https://github.com/cheongyeong">
               GitHub 바로가기
             </a>
           </div>
          </div>


    </section>
        

</template>

<script>

export default {
      data(){
  return {
    resume : false,
}
  },
}

</script>