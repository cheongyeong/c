<template>
    <section class="contactMe-section" id="contact">

      <h1 class="bold">CONTACT ME</h1>
      <h2>지금까지 저의 포트폴리오를 봐주셔서 감사합니다.</h2>


      <div class="contact-wrap">
        <div class="mail">
           <span class="bold contactBtn" @click="show = !show" :class="{ active:show }">
             Mail
           </span>
             <Transition>
              <p v-show="show"><figure class="mailIcon"></figure>cheongyeonggg@gmail.com</p>
            </Transition>
        </div>
        <div class="mobile">
           <span class="bold contactBtn" @click="show1 = !show1" :class="{active:show1}">
             Mobile
           </span>
             <Transition>
              <p v-show="show1"><figure class="phoneIcon"></figure>010-2423-7734</p>
            </Transition>
        </div>

        <div class="GitHub">
           <span class="bold contactBtn" @click="show2= !show2" :class="{active:show2}">
             GitHub
           </span>
             <Transition>
              <p v-show="show2"><figure class="gitIcon"></figure><a target="_blank" href="https://github.com/cheongyeong">https://github.com/cheongyeong</a></p>
            </Transition>
        </div>
       
    
      </div>




    </section>
  
</template>

<script>

export default {

  data(){
    return{
      
         show: false,
         show1: false,
         show2: false,
      } 

    },

 
  
 
};



</script>

<style scoped>


.v-enter-from,
.v-leave-to {
  opacity: 1;
}


.active{
  left: 265px;
  transition: all 0.5s ;
}

</style>


