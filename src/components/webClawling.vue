<template>
    <div class="circle-wrap">
      <div class="mint-circle"></div>
    </div>

    <section class="clawling-section">
      <h1 class="bold">WEB CLAWLING</h1>

      <hooper :itemsToShow="1.25" :centerMode="true">
  <slide>
    slide 1
  </slide>
  <slide>
    slide 2
  </slide>
  <slide>
    slide 3
  </slide>
  <slide>
    slide 4
  </slide>
  <slide>
    slide 5
  </slide>
  <slide>
    slide 6
  </slide>
</hooper>


    </section>
    <span></span>
  
</template>

<script>



</script>
 

<style scoped>
.hooper-slide.is-current {
  transform: scale(1.3);
}

  
</style>
