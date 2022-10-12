<template>
<h1 class="font-bold text-3xl text-center">
About Me
</h1>
  <div class="container
          px-6
          py-8
          mx-auto
          grid 
          grid-cols-1
          sm:grid-cols-2
          gap-4
          ">
          <div class="">
  <img src="images/image1.png" alt="" srcset="">
  </div>
          <div class="">
    <h1 class="font-bold text-5xl ">
      HOLA!!
    </h1>
    <p>
      A Junior Full-Stack Developer who focus on building an app that meet the user requirement using javascript  especially react for front-end and nodejs for back-end development
    </p>
    </div>
    
  </div>
  
</template>
<script>
import PortfolioList from '@/data/PortfolioList.js'

import Card from "../components/Card.vue";
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleExperience.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";
export default {
  name: "AboutMe",
  components: {
    Card,
    CIcon,
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      PortfolioList: PortfolioList,
    }
  },
  setup() {
    return {
      modules: [Grid, Pagination, Navigation],
      icon,
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          780: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
      },
    };
  },
};
</script>