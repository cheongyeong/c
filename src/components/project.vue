<template>
<div class="projectBg" v-if="antra == true">
     <img class="closeBtn" src="img/close-white.png" alt="" @click="antra = false">
     <div  class="Popup">
       <img src="img/antra.png" alt="">
     </div>
</div>

<section class="project-section" id="project">
      <h1 class="bold">PROJECT</h1>

 <div class="project-wrap">
    <div class="tabList-wrap">
       <div class="listBtn" v-for="(tab, index) in tabList" :key="index" 
          @click.prevent="currentTab = index"> <span class="tabBtn" :class="{active:currentTab === index}"></span>{{ tab }}
       </div>
    </div>

    <div class="contents-wrap">
      <div v-show="currentTab == 0" class="tab-cont antra">
       <div class="projectTitle">
         <h3>project.01</h3>
         <h2>앤트러사이트 커피<br>반응형 웹사이트 리뉴얼</h2>
         <div class="more" @click="antra = true">more view</div>
       </div>
     </div>

     <div v-show="currentTab == 1" class="tab-cont seoulTakju">
      <div class="projectTitle">
         <h3>project.02</h3>
         <h2>서울탁주<br>반응형 웹사이트 리뉴얼</h2>
         <div class="more">more view</div>
      </div>
       <img class="bori" src="img/move-bori.gif" alt="">
     </div>

     <div v-show="currentTab == 2" class="tab-cont">
       <div class="projectTitle">
         <h3>project.03</h3>
         <h2>서문시장야시장<br>반응형 웹사이트 리뉴얼</h2>
         <div class="more">more view</div>
      </div>
  </div>

  </div>


  </div>

</section>

<span></span>

  
</template>

<script>

export default {
  data () {
    return {
      currentTab: 0,
      tabList: [
        '앤트러사이트',
        '서울탁주',
        '서문시장야시장'
      ],
      antra : false,
    }
    
  }
}
</script>

<style scoped>
  
</style>