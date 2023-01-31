<template>
  <section>

     <vueper-slides class="slideWrap no-shadow" 
        :dragging-distance = "70"
        :visible-slides="3"
        :slide-ratio="1 / 3">
              
       <vueper-slide class="slide">
         <div class="slideContent">dsdsd 1ss</div>
       </vueper-slide>
       <vueper-slide class="slide2">
         <div class="slideContent"> dsd1ss</div>
       </vueper-slide>
       <vueper-slide class="slide3">
         <div class="slideContent"> dsd1ss</div>
       </vueper-slide>
       <vueper-slide class="slide">
         <div class="slideContent"> dsd1ss</div>
       </vueper-slide>
       <vueper-slide class="slide2">
         <div class="slideContent"> dsd1ss</div>
       </vueper-slide>
       <vueper-slide class="slide3">
         <div class="slideContent"> dsd1ss</div>
       </vueper-slide>

     </vueper-slides>

    </section>
</template>



<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {

  components: { VueperSlides, VueperSlide },

}
  

</script>



<style>
</style>