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

    <section class="profile-section" id="about">
      <div class="photo">
        <img src="img/1-1.jpg" alt="">
        <div class="profile-txt">
          <h3>
            “ <span class="bold">반갑습니다.</span> 새로운 것을 끊임없이
            도전하여 넓은 시야를 가진 개발자가
            되고 싶은 <span class="bold">박천경</span>입니다. ” </h3>
        </div>
      </div>
      <div class="aboutMe">
        <div class="about">
          <h4 class="bold backBlue">ABOUT</h4>
          <p>
            박천경 PARK CHEON GYEONG<br>
            1995.10.06<br>
            010-2423-7734<br>
            cheongyeonggg@gmail.com
          </p>
        </div>
        <div class="edu">
          <h4 class="bold backBlue">EDUCATION</h4>
          <p>
            2022.09 - 2023.02 뷰(Vue) 활용 프론트엔드 웹 개발자 양성 과정 수료<br>
            2014.03 - 2017.02 명지전문대학 산업디자인과 제품디자인 전공<br>
            2011.03 - 2014.02 서울디자인고등학교 조명예술디자인과<br>
          </p>
        </div>

        <div class="skils">
          <h4 class="bold backBlue">SKILS</h4>
          <div>
            <img src="img/html-1.png" alt="">
            <img src="img/css-1.png" alt="">
            <img src="img/js-2.png" alt="">
            <img src="img/jq.png" alt="">
            <img src="img/node.png" alt="">
            <img src="img/sql.png" alt="">
            <img src="img/vue.png" alt="">
            <img src="img/photoshop.png" alt="">
            <img src="img/ai.png" alt="">
          </div>
        </div>

        <div class="buttonWrap">
           <div class="resume-button button" type="button" @click="resume = true">
             Resume

           </div>
           <div class="git-button button" type="button">
             <a target="_blank" href="https://github.com/cheongyeong"><span class="gitIcon"></span>GitHub</a>
           </div>
        </div>
           

      </div>

    </section>


    <span></span>

  
</template>

<script>

export default {
      data(){
  return {
    resume : false,
  }
}
}

</script>

<style scoped>
  
</style>