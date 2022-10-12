<template>
<div class="bg-bgprimary mb-12">
  <Navbar />
  <Header />
  </div>
  <Experience />
  <Skills/>
  <Portfolio/>
  <AboutMe/>
  
  <Footer />
  
  
</template>
<script>
// Import Swiper Vue.js components

import Navbar from "./components/Navbar.vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import Skills from "./views/Skills.vue";
import Experience from "./views/Experience.vue";
import Portfolio from './views/Portfolio.vue';
import AboutMe from './views/AboutMe.vue';
// Import Swiper styles
import "swiper/css";
import { CIcon } from '@coreui/icons-vue';
import * as icon from '@coreui/icons';
export default {
  components: {
    Navbar,
    Header,
    Footer,
    Skills,
    Portfolio,
    Experience,
    AboutMe,
    CIcon,
  },
setup() {
    return {
      icon,
    }
  }
};
</script>