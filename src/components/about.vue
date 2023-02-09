<template>
   <div class="bg-black" v-if="resume == true">
       <div class="page-bg">
        <a class="downloadBtn" href="file/resume.pdf" download >Save</a>
        <div class="close" @click="resume = false">
          <img src="img/close.png" alt="">
        </div>
        <img class="resume" src="img/resume.jpg">
       </div>
    </div>
<div id="about">
    <div class="imageWrap" id="target" v-bind:class="{show:showup==true}" >
       <div class="photo">
         <img src="img/1.png" alt="">
       </div>
       <div class="profile-txt">
          <h3>
            “ 반갑습니다. 새로운 도전을 좋아하며,
            다양한 색을 가진 개발자가
            되고 싶은 박천경입니다. ” 
          </h3>
       </div>
    </div>

    <section class="profile-section" >

      <div class="aboutMe">
        <div class="about">
         <div>
            <h4 class="bold">ABOUT</h4>
            <p>
              박천경<br>
              1995.10.06<br>
              010-2423-7734<br>
              cheongyeonggg@gmail.com
           </p>
         </div>

         <div class="edu">
           <h4 class="bold">EDUCATION</h4>
           <p>
             2022.09 - 2023.02 <br class="br-none"> 뷰(Vue) 활용 프론트엔드 웹 개발자 양성 과정 수료<br>
             2014.03 - 2017.02 <br class="br-none"> 명지전문대학 산업디자인과 제품디자인 전공<br>
             2011.03 - 2014.02 <br class="br-none"> 서울디자인고등학교 조명예술디자인과<br>
           </p>
         </div>
        </div>

        <div class="skils">
          <div class="skil">
            <h4 class="bold">SKILS</h4>
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
             <a target="_blank" href="https://github.com/cheongyeong">
               <span class="gitIcon"></span><span>GitHub</span>
             </a>
           </div>
          </div>

        </div>
      </div>

           

    

    </section>
</div>

    <span></span>

  

</template>

<script>


export default {
      data(){
  return {
    resume : false,
    showup: false,
    // scrollTop: 0,
    // target: null,
  }
  },

  mounted() {
     document.addEventListener('scroll', this.scrollshow);
},

 unmounted() {
    document.removeEventListener('scroll', this.scrollshow);
   },

 methods: {
   scrollshow: function (e) {
    this.target = document.querySelector('#target');
    let section = document.querySelector('#about');
    this.scrollTop = document.documentElement.scrollTop;
    console.log(section.offsetTop);
            if (this.scrollTop > section.offsetTop-120) {
          this.showup = true;
        } else {
          this.showup = false;
        }
    
  }
  
 },

}



</script>

<style scoped>
  
</style>