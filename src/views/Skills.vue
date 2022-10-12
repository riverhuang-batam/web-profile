<template>
  <h1 class="font-bold text-3xl text-center">Skills</h1>
  <!-- <span
  v-for="skill in SkillList"
    :key="skill.id"
  >
  <h1>{{skill.title}} </h1>
  </span> -->
  <swiper
    :breakpoints="swiperOptions.breakpoints"
    :slidesPerView="6"
    :slidesPerGroup="2"
    :grid="{
      rows: 2,
    }"
    :spaceBetween="0"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="skill in SkillList" :key="skill.id" >
      <div
        class="
          max-w-sm
          border border-secondary
          box-content h-32 w-52 p-4 border-4
          rounded
          overflow-hidden
          shadow-lg
        "
      >
        <div class="sm:px-14 sm:py-4 px-2 py-2 mb-10">
          <div class="font-bold sm:text-xs mb-2 text-secondary">
            <p class="mx-auto">{{ skill.title }}</p>
          </div>
           <CIcon :icon="skill.icon" class="mx-auto fill-secondary w-6" v-if="skill.icon" /> 
          
            <!-- <CIcon :icon="skill.icon" class="mx-auto fill-secondary w-6" /> -->
        </div>
      </div>
    </swiper-slide>

    <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->

    <!-- CIcon is using a SVG file check the tailwind documentation how to change the color -->

    <!-- <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p> -->

    <!-- <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> -->
  </swiper>
</template>
<script>
import SkillList from "@/data/SkillList.js";
import Card from "../components/Card.vue";
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styleSkill.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";

export default {
  name: "Skills",
  components: {
    Card,
    CIcon,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      SkillList: SkillList,
    };
  },
  mounted() {
    console.log(icon.cibLinux, '=====');
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

<style scoped src="../views/styleSkill.css">
/* @import '../assets/css/startpage.css'; */
</style>