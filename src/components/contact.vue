<template>
    <section class="contactMe-section" id="contact">

      <h1 class="bold">CONTACT ME</h1>


      <div class="contact-wrap">
        <div class="contactBtn"  @click="leftMover">
           <span class="mail bold">
             Mail
           </span>
            <p class="contactC"><figure class="mailIcon"></figure>cheongyeonggg@gmail.com</p>
        </div>

        <div class="contactBtn" @click="leftMover">
           <span class="mobile bold">
             Mobile
           </span>
           <p class="contactC"><figure class="phoneIcon"></figure>010-2423-7734</p>

        </div>

        <div class="contactBtn" @click="leftMover">
           <span class="GitHub bold">
             GitHub
           </span>
           <p class="contactC"><figure class="gitIcon"></figure><a target="_blank" href="https://github.com/cheongyeong">github.com/cheongyeong</a></p>
        </div>
       
    
      </div>




    </section>
  
</template>


<script>

export default {
  setup () {
    const leftMover = function (e) {
      const spans = document.querySelectorAll('.contactBtn') // 위에 span태그들 다 잡아줌
      if (e.target.classList.contains('active')) { // 만약 클릭한 버튼의 class에 active를 포함중이다?
        e.target.classList.remove('active') // 그럼 그 요소 의 class에 active 지워줌
      } else { // 그게 아니면 아래 함수 실행
        for (let i = 0; i < spans.length; i++) { // span 태그의 갯수만큼 반복문
          spans[i].classList.remove('active') // 반복하면서 모든 span 태그들 클래스리스트에 포함된 active 삭제
        } // for문 밖으로 나와서
        e.target.classList.add('active') // 클릭된 요소의 클래스리스트에 active 추가함
      }
    }
    // click 했을 때 실행되는 함수
    return {
      leftMover // 함수 리턴
    }
  }
}


</script>

<style scoped>


</style>




