<template>
    <div class="circle-wrap">
      <div class="mint-circle"></div>
    </div>

    <section class="clawling-section" id="webClawling">
      <h1 class="bold">WEB CLAWLING</h1>
      <div class="slideWrap">
        <swiper
         :options="swiperOption"
         :slidesPerView="2.5"
         :spaceBetween="30"
         :loop="true"
         :navigation="true"
         :modules="modules"

         class="mySwiper" >
          <swiper-slide class="content green"><a target="_blank" href="http://cheongyeonggg.dothome.co.kr/greenhome/index.html">veiw</a></swiper-slide>
          <swiper-slide class="content dosirak"></swiper-slide>
          <swiper-slide class="content">Slide 3</swiper-slide>

        </swiper>
      
      </div>

 


    </section>
    <span></span>
</template>



<script>
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';




export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      swiperOption : {
        navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev' 
    } 
      }
    }
  },


  setup() {
    return {
      modules: [ Navigation],
    };
  },

};
  

</script>



<style>
</style>

