<template>
  <h1 class="font-bold text-3xl text-center">About Me</h1>
  <div
    class="container px-6 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
  >
    <div class="">
      <img src="images/image1.png" alt="" srcset="" />
    </div>
    <div class="">
      <h1 class="font-bold text-5xl">HOLA!!</h1>
      <p class="text-xl mt-4">
        A Junior Full-Stack Developer who focus on building an app that meet the
        user requirement using javascript especially react for front-end and
        nodejs for back-end development
      </p>

      <div class="grid grid-cols-8 divide-x-2 mt-4">
        <div class="flex align-middle">
          <span class="inline-block">
            <CIcon :icon="icon.cibGmail" class="w-6" />
          </span>
          <span class="inline-block ml-4">
            <p class="text-xl whitespace-nowrap">E-mail</p>
          </span>
        </div>
        <div>
          <p class="text-xl text-center ">:</p>
        </div>
        <div>
          <p class="text-xl">riverhuang011@gmail.com</p>
        </div>
      </div>
      <div class="grid grid-cols-8 divide-x-2 mt-4">
        <div class="flex align-middle">
          <span class="inline-block">
            <CIcon :icon="icon.cilPhone" class="w-6" />
          </span>
          <span class="inline-block ml-4">
            <p class="text-xl">Phone</p>
          </span>
        </div>
        <div>
          <p class="text-xl text-center">:</p>
        </div>
        <div>
          <p class="text-xl whitespace-nowrap">0896-1815-5369</p>
        </div>
      </div>

      <div class="grid grid-cols-8 divide-x mt-4">
        <div class="whitespace-nowrap">
          <span class="inline-block">
            <CIcon :icon="icon.cibGithub" class="w-6" />
          </span>
          <span class="inline-block ml-4">
            <p class="text-xl">Github</p>
          </span>
        </div>
        <div>
          <p class="text-xl text-center">:</p>
        </div>
        <div>
          <p class="text-xl whitespace-nowrap">riverhuang-batam</p>
        </div>
      </div>
      <div class="grid grid-cols-8 divide-x-2 mt-4">
        <div class="whitespace-nowrap">
          <span class="inline-block">
            <CIcon :icon="icon.cibLinkedin" class="w-6" />
          </span>
          <span class="inline-block ml-4">
            <p class="text-xl whitespace-nowrap">Linkedin</p>
          </span>
        </div>
        <div >
          <p class="text-xl text-center">:</p>
        </div>
        <div class="whitespace-nowrap">
          <p class="text-xl">River Huang</p>
        </div>
      </div>

      <p class="text-2xl mt-4">Hobbies</p>
      <div class="grid grid-cols-4 divide-x-2 mt-2">
        <div>
          <span class="inline-block">
            <CIcon :icon="icon.cilGamepad" class="w-6" />
          </span>
          <span class="inline-block">
            <p class="ml-2 text-xl">Play Games</p>
          </span>
        </div>
        <div>
          <span class="inline-block">
            <CIcon :icon="icon.cilMusicNote" class="w-6" />
          </span>
          <span class="inline-block">
            <p class="ml-2 text-xl">Listen Music</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioList from "@/data/PortfolioList.js";

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
  data() {
    return {
      PortfolioList: PortfolioList,
    };
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
