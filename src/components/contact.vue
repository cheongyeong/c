<template>
    <section class="contactMe-section" id="contact">
      <h1 class="bold">CONTACT ME</h1>
      <h2>지금까지 저의 포트폴리오를 봐주셔서 감사합니다.</h2>
      <div class="contact-wrap">
        <div class="mail"  @click="show = !show">
          <Transition name="slide">
           <span v-if="show">
             <h2 class="bold">Mail</h2>
           </span>
          </Transition>
        </div>
        <div class="mobile">
          <span>
            <h2 class="bold">Mobile</h2>
          </span>
        </div>
        <div class="insta">
          <span>
            <h2 class="bold">GitHub</h2>
          </span>
        </div>
      </div>
    </section>
  
</template>

<script>

export default {
  data() {
     return {
      show: false
  }
  
}
}
</script>

<style scoped>


.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.8s
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(200px);
  opacity: 1;
}
  
</style>