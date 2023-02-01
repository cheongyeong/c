<template>
  <section>
  <swiper
    :slidesPerView="2.5"
    :spaceBetween="30"
    :loop="true"
    :centeredSlides="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper" >
    <swiper-slide class="content">Slide 1</swiper-slide>
    <swiper-slide class="content">Slide 2</swiper-slide>
    <swiper-slide class="content">Slide 3</swiper-slide>

  </swiper>


    </section>
</template>



<script>
  import { Navigation } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import "swiper/css/navigation";






export default {
  components: {
    Swiper,
    SwiperSlide
  },

  setup() {
    return {
      modules: [ Navigation ],
    };
  },
};
  

</script>



<style>
</style>