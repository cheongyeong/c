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
        <div class="emoticon">
          <img src="img/profile.png" alt="">
        </div>
        <h2>  “ 반갑습니다. 새로운 도전을 좋아하며,<br>
            다양한 색을 가진 개발자가 되고 싶은 박천경입니다. ” </h2>
      </div>
        
      <div class="about-box">
         <div class="about">
            <h4 class="bold">ABOUT</h4>
            <p>박천경</p>
            <p>1995.10.06</p>
            <p>010-2423-7734</p>
            <p>cheongyeonggg@gmail.com</p>
         </div>

         <div class="edu">
           <h4 class="bold">EDUCATION</h4>
           <p><br>2022.09 - 2023.02 <br> 뷰(Vue) 활용 프론트엔드 웹 개발자 양성 과정 수료</p>
           <p>2014.03 - 2017.02 <br> 명지전문대학 산업디자인과 제품디자인 전공</p>           
         </div>
        
        <div class="skils">
          <div class="skil">
            <h4 class="bold">SKILS</h4>
            <div>
              <img src="img/vue.png" alt="">
              <img src="img/node.png" alt="">
              <img src="img/sql.png" alt="">
              <img src="img/jq.png" alt="">
              <img src="img/html-1.png" alt="">
              <img src="img/css-1.png" alt="">
              <img src="img/js-2.png" alt="">
              <img src="img/photoshop.png" alt="">
              <img src="img/ai.png" alt="">
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