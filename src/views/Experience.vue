<template>
  <h1 class="font-bold text-3xl text-center">Experience</h1>
  <!-- <swiper :navigation="true" :modules="modules" class="mySwiper4">
    <swiper-slide>
      <div class="grid grid-cols-2">
        <div class="mt-12">
          <img src="images/image1.png" alt="" srcset="" />
        </div>

        <div class="text-left mt-">
          <p class="text-2xl">
            A Junior Full-Stack Developer who focus on building an app that meet
            the user requirement using javascript especially react for front-end
            and nodejs for back-end development
          </p>
        </div>
      </div> </swiper-slide
    ><swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide
    ><swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide
    ><swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide
    ><swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper> -->
  <Modal />
  <div class="container mx-auto px-4">
  <swiper
    :loop="true"
    :autoHeight="true"
    :slidesPerView="1"
    :slidesPerGroup="1"
    :allowTouchMove="false"
    ref="mySwiper1"
    :modules="modules"
  >
    <swiper-slide v-for="experience in ExperienceList" :key="experience.id">
      <div class="grid grid-cols-10 sm:grid-cols-10 gap-4 mt-4">
        <div class=" col-start-1 col-end-4">
          <img :src="experience.logo" width="310" size="" alt="" srcset="" />
        </div>
<div class="col-end-4 col-start-11">
        <div class="text-left mt-148">
          <h1 class="font-bold text-4xl mt-4 mb-4">
            {{ experience.title }} {{ experience.id }}
          </h1>

          <p class="text-2xl body-font font-sans">
            {{experience.description}}
          </p>
          <p class="text-semibold font-bold mb-2 mt-2">Learned Skills</p>

          <span
            class="text-base mr-2 mb-2 inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-secondary text-white rounded"
            v-for="skill in experience.skills"
            :key="skill.id"
          >
            {{ skill }}
          </span>
        </div>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide> <swiper-slide>Slide 4</swiper-slide
    >
    <swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide> <swiper-slide>Slide 8</swiper-slide
    > -->
  </swiper>
  </div>
  <swiper
    class="swiper-logo"
    :loop="true"
    :slidesPerView="3"
    :slidesPerGroup="1"
    ref="mySwiper2"
    :navigation="true"
    :modules="modules"
    :spaceBetween="-30"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      class="swiper-slide-pagination"
      v-for="experience in ExperienceList"
      :key="experience.id"
    >
      <!-- {{ experience.title }} -->
      <img
        class="swiper-pagination-image"
        :src="experience.logo"
      />
    </swiper-slide>

    <!-- <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide> <swiper-slide>Slide 4</swiper-slide
    >
    <swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide> <swiper-slide>Slide 8</swiper-slide
    > -->
  </swiper>
  <span class="swiper-slide-next"></span>
  <modal title="This is a long modal!">
    <div style="margin: 32em 0">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </modal>
</template>

<script>
import ExperienceList from "@/data/ExperienceList.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Modal from "../components/Modal.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styleExperience.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";
export default {
  name: "Experience",
  components: {
    CIcon,
    Swiper,
    SwiperSlide,
    Modal,
  },
  data() {
    return {
      ExperienceList: ExperienceList,
    };
  },
  methods: {
    // navigationPrev (swiper) {
    //     this.$refs.mySwiper1.$el.swiper.slideTo(this.$refs.mySwiper2.$el.swiper.activeIndex)
    //   },
    // navigationNext() {

    //     console.log(this.$refs.mySwiper1.$el.swiper.activeIndex, '\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')
    //     this.$refs.mySwiper1.$el.swiper.slideTo(this.$refs.mySwiper2.$el.swiper.activeIndex)
    //     // console.log('next work')
    //   },
    onSlideChange() {
      console.log(this.$refs.mySwiper2.$el.swiper.realIndex, "=====");
      this.$refs.mySwiper1.$el.swiper.slideTo(
        this.$refs.mySwiper2.$el.swiper.realIndex
      );
      // console.log(this.$refs.mySwiper1.$el.swiper.activeIndex, '======')
    },
  },
  mounted() {
    console.log(ExperienceList);
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

<style></style>
