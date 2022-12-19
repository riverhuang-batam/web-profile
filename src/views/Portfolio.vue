<template>
<div>
  <Modal :isOpen="isOpen" :showModal="showModal">
    <!-- {{portfolio.description}} {{portfolio.id}} -->
    <h1 class="text-center text-3xl font-bold mb-4">
      {{ this.portfolioModalValue.title }}
    </h1>

    <!--<div class="mx-auto grid grid-cols-12 sm:grid-cols-2">-->
    <div class="mx-auto grid grid-cols-20 gap-2">
      <div class="flex align-middle">
        <CIcon
          @click="prev(portfolioModalValue)"
          :icon="icon.cilArrowLeft"
          class="mx-auto col-start-1 col-end-4 md:col-start-1 inset-y-0 left-0 w-6 top-20 left-20 m-0"
        />
      </div>

      <div class="col-start-2 col-end-19">
        <img
          width="1000"
          height="1000"
          :src="portfolioModalValue.thumbnail"
          alt=""
        />
      </div>
      <div class="
      col-start-11 col-span-9
      ">
        <!-- <p class="text-xl text-center">
          created on {{ this.portfolioModalValue.year }}
        </p> -->
        <p class="mt-2 mb-2 text-xl body-font font-sans">{{ portfolioModalValue.description }}</p>
        <span class="inline-block">
          <CIcon :icon="icon.cilLibrary" class="w-6" />
        </span>
        <span class="inline-block font-semibold">
          <p class="text-xl ml-2">Tech:</p>
        </span>
        <div>
          <span
            class="text-base mr-2 mb-2 inline-block py-2 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-secondary text-white rounded"
            v-for="skill in portfolioModalValue.skills"
            :key="skill.id"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div class="flex align-middle">
        <CIcon
          @click="next(portfolioModalValue)"
          :icon="icon.cilArrowRight"
          class="mx-auto col-end-21 fill-secondary w-6"
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button class="bg-primary hover:bg-blue-400 text-white mt-4 ">
        <p class="text-2xl">Open Website</p>
      </Button>
    </div>
  </Modal>
  <h1 class="font-bold text-3xl text-center">Portfolio</h1>
  <div class="container mx-auto">
    <div class="relative inline-block text-left dropdown ">
      <span class="rounded-md shadow-sm"
        ><button
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          @click="show = !show"
          type="button"
          aria-haspopup="true"
          aria-expanded="true"
          aria-controls="headlessui-menu-items-117"
        >
          <span class="">{{ filterDropdown() }}</span>
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg></button
      ></span>
      <div
        v-show="show"
        class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
      >
        <div
          class="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
          aria-labelledby="headlessui-menu-button-1"
          id="headlessui-menu-items-117"
          role="menu"
        >
          <div class="py-1" @click="debug">
            <a
              v-for="(portfolioTags, index) in portfolioKeyword"
              :key="index"
              :tabindex="index"
              class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
              role="menuitem"
              @click="() => (this.chosenKeyword = portfolioTags)"
            >
              {{ portfolioTags }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class=" mx-auto px-6 py-8 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center lg:container">
    <div
      v-for="portfolio in filterPortfolioData"
      :key="portfolio.id"
      class="max-w-sm rounded overflow-hidden bg-white shadow-lg mt-4 mb-4 flex flex-col"
      @click="showModal(portfolio)"
    >
      <img
        class="w-full h-56"
        :src="portfolio.thumbnail"
        :alt="portfolio.thumbnail"
      />
      
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 ">{{ portfolio.title }}</div>
        <p class="text-gray-700 text-base body-font font-sans text-justify tracking-normal">
          {{ portfolio.description }}
        </p>
      </div>
      <!-- <div class="px-6 pt-4 pb-2"> -->
      <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" v-for="tag in portfolio.tags">{{tag}}</span> -->
      <!-- </div> -->

      <div class="px-4 pt-8 pb-4 text-right mt-auto">
        <Button class="bg-primary hover:bg-blue-400 text-white">
          <p class="text-xl">See More</p>
        </Button>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import PortfolioList from "@/data/PortfolioList.js";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";
import Button from "../components/Button.vue";
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylePortfolio.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper";
export default {
  name: "Portfolio",
  components: {
    Card,
    CIcon,
    Swiper,
    SwiperSlide,
    Modal,
    Button,
  },
  data() {
    return {
      portfolioList: PortfolioList,
      portfolioKeyword: ["All"],
      chosenKeyword: null,
      choosedPortfolioSkills: null,
      isOpen: false,
      portfolioModalValue: {},
      show: false,
    };
  },
  computed: {
    filterPortfolioData() {
      console.log("itworks firlter");
      if (this.chosenKeyword === "All") {
        return this.portfolioList;
      } else if (this.chosenKeyword) {
        return this.portfolioList.filter((portfolio) =>
          portfolio.tags.includes(this.chosenKeyword)
        );
      }
      return this.portfolioList;

      //  console.log(filter, 'filtered=====')
    },
  },

  mounted() {
    // this.Modal.showModal();
    this.keywordPortfolio();
    console.log(this.portfolioList, "+++++");
  },

  methods: {
    showModal: function (value, ref) {
      console.log(this.$refs.modalbackdrop);
      this.isOpen = !this.isOpen;

      if (value) {
        this.portfolioModalValue = value;
      }

      //  if(value){

      //    this.portfolioModal = value;
      // //  }
      //  console.log('is working', this.isOpen)
    },
    filterDropdown: function () {
      if (this.chosenKeyword) {
        return this.chosenKeyword;
      }
      return "Filter";
    },
    debug: function () {
      console.log(this.portfolioKeyword);
    },
    keywordPortfolio: function (value) {
      PortfolioList.map((data) => {
        data.tags.map((tag) => {
          if (!this.portfolioKeyword.includes(tag)) {
            this.portfolioKeyword.push(tag);
          }
        });
      });

      console.log(this.portfolioKeyword, "portfolioKeyword+++");
    },

    addKeyword: function () {},
    next: function (value) {
      const filteredData = this.portfolioList.filter((portfolio) =>
        portfolio.tags.includes(this.chosenKeyword)
      );
      if (this.chosenKeyword && this.chosenKeyword !== "All") {
        console.log("if working");
        filteredData.map((x, index) => {
          if (x.id === value.id && filteredData.length > index + 1) {
            console.log("it change =====");
            return (this.portfolioModalValue = filteredData[index + 1]);
          }
          return;
        });
      } else {
        this.portfolioList.map((x, index) => {
          if (x.id === value.id && this.portfolioList.length > index + 1) {
            return (this.portfolioModalValue = this.portfolioList[index + 1]);
          }
          return;
        });
      }
    },
    prev: function (value) {
      const filteredData = this.portfolioList.filter((portfolio) =>
        portfolio.tags.includes(this.chosenKeyword)
      );
      if (this.chosenKeyword && this.chosenKeyword !== "All") {
        filteredData.map((x, index) => {
          if (x.id === value.id && index > 0) {
            return (this.portfolioModalValue = filteredData[index - 1]);
          }

          return this.portfolioModalValue;
        });
      } else {
        this.portfolioList.map((x, index) => {
          if (x.id === value.id && index > 0) {
            return (this.portfolioModalValue = this.portfolioList[index - 1]);
          }
        });
      }
    },
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
