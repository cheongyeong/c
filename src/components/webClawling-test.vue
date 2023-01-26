<template>
    <div class="circle-wrap">
      <div class="mint-circle"></div>
    </div>

    <section class="clawling-section">
      <h1 class="bold">WEB CLAWLING</h1>
      <div class="clawling-container">
        <article class="owl">
          <carousel v-bind="options" @initialized="init" @changed="changed" class="owl-carousel owl-theme">
            <div class="item">
              <h2>싱그러운 집</h2>
            </div>
            <div class="item">
              <h2>더 리치몬드</h2>
            </div>
            <div class="item">
              <h2>도시락통</h2>
            </div>

         </carousel>
        </article>
      </div>
    </section>
    <span></span>
  
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  
  components: { carousel },
  data() {
    return {
      plugin:null,
      options: {
         stagePadding: 250,
    loop: true,
    items: 1,
    lazyLoad: true,
    center: true,
    Boolean: true,
    nav: true,

      }
    }
  }}



</script>
 

<style scoped>
  
</style>
