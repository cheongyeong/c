<template>
    <section class="contactMe-section" id="contact">
      <ul class="city-buttons">
  	   <li 
       @click="selectCity"
       :class="{ isSelected: citySelected === true }"
       v-for="city in cities" :key="city.code">
        {{ cities.lable }}
       </li>
      </ul>

      <h1 class="bold">CONTACT ME</h1>
      <h2>지금까지 저의 포트폴리오를 봐주셔서 감사합니다.</h2>

      <div class="contact-wrap">
        <div class="mail"  @click="toggleOnOff">
           <span>
             <h2 class="bold">Mail</h2>
           </span>
           <h3  v-if="isStatusOn">cheongyeonggg@gmail.com</h3>
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
  name: 'city-selector',
      data(){
  return {
    isStatusOn: false,
    cities: [
        { code: "Seoul", label: "서울", selected: false},
        { code: "London", label: "런던", selected: false},
        { code: "Chicago", label: "시카고", selected: false},
      ]
}
},

methods: {
  selectCity(item) {
    item.selected = !item.selected;
  },

  toggleOnOff: function() {
    this.isStatusOn = !this.isStatusOn;
    
  }, 
}
}




</script>

<style scoped>



  
</style>