<template>
    <section class="contactMe-section" id="contact">

      <h1 class="bold">CONTACT ME</h1>
      <h2>지금까지 저의 포트폴리오를 봐주셔서 감사합니다.</h2>


      <div class="contact-wrap">
        <div class="mail">
           <span class="bold mails" @click="show = !show" :class="{active:show}">
             Mail
           </span>
             <Transition>
              <p v-if="show">cheongyeonggg@gmail.com</p>
            </Transition>
        </div>
        <div class="mobile">
           <span class="bold mobiles" @click="show = !show" :class="{active:show}">
             Mobile
           </span>
             <Transition>
              <p v-if="show">cheongyeonggg@gmail.com</p>
            </Transition>
        </div>

        <div class="GitHub">
           <span class="bold" @click="show= !show" :class="{active:show}">
             GitHub
           </span>
             <Transition>
              <p v-if="show">cheongyeonggg@gmail.com</p>
            </Transition>
        </div>
       
    
      </div>









    </section>
  
</template>

<script>

export default {
  data() {
    return {
      show: true,


    }
  },


}


</script>

<style scoped>


.v-enter-from,
.v-leave-to {
  opacity: 1;
}

.active{
  left: 200px;
  transition: all 0.5s ;
}


</style>