<template>


  <link rel="stylesheet" href="css/reset.css" >
  <link rel="stylesheet" href="css/index.css" >
  <link rel="stylesheet" href="css/header.css" >

    <header>
      <nav>
       <h1 class="logo"></h1>
        <ul class="menu">
          <li v-on:click="goSection" data-target="about" class="toSection">about me</li>
          <li v-on:click="goSection" data-target="project" class="toSection">project</li>
          <li v-on:click="goSection" data-target="webclone" class="toSection">web clone</li>
          <li v-on:click="goSection" data-target="contact" class="toSection">contact</li>
        </ul>  
      </nav>
  
    </header>


  
  
  <main class="index-page" id="app">
   <intro />
   <aboutme />
   <project />
   <webClawling />
   <contact />
  </main>
  

  

</template>

<script>
import intro from './components/intro.vue';
import aboutme from './components/aboutme.vue';
import project from './components/project.vue';
import webClawling from './components/webClawling.vue';
import contact from './components/contact.vue';
import AOS from 'aos';




export default {
  name: 'App',
  components: {
    intro, webClawling, contact, aboutme,project,
    },
    
    created() {
    AOS.init()
  },

   
  data() {
    return {
      menuShow : false,
      btnShow : false,
      scrollTop: 0,
    }
  },
  


  methods: {
    goSection(e) {
      e.preventDefault();
      if (!e.target.matches('.toSection')) {
        return;
      }
      const clickNav = document.getElementById(e.target.dataset.target);
      if (clickNav) {
        clickNav.scrollIntoView({ behavior: 'smooth' });
      }
    },

  },
 
}






</script>




<style scoped>



</style>
