<template>
<Modal :isOpen="isOpen" :showModal="showModal" >

<!-- {{portfolio.description}} {{portfolio.id}} -->
  <h1 class="text-center text-3xl font-bold mb-4">{{this.portfolioModalValue.title}}</h1>
  <div class="mx-auto
          grid 
          grid-cols-1
          sm:grid-cols-2">
          <div>
<img width="1000" height="1000" :src="portfolioModalValue.thumbnail" alt=""/>
</div>
<div>
{{this.portfolioModalValue.year}}
  <p>{{portfolioModalValue.description}}</p>
  <span class="text-xs
              mr-2
              mb-2
              inline-block
              py-1
              px-2.5
              leading-none
              text-center
              whitespace-nowrap
              align-baseline
              font-bold
              bg-yellow-600
              text-white
              rounded-full" 
            v-for="skill in portfolioModalValue.skills" :key="skill.id">
  {{skill}}
  </span>
</div>
  
  </div>
  <button @click="prev(portfolioModalValue.slideNumber)">left</button>
  <button @click="next(portfolioModalValue.slideNumber)">right</button>

</Modal>
<h1 class="font-bold text-3xl text-center" >
Portfolio
</h1>

<button @click="filterPortfolio()">test</button>

  <div class=" relative inline-block text-left dropdown">
    <span class="rounded-md shadow-sm"
      ><button class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" @click="show = !show" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>{{filterDropdown()}}</span>
        <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button
    ></span>
    <div v-show="show" class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95" >
      <div  class="absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
        
        <div class="py-1" @click="debug">

          <a v-for="(portfolioTags, index) in portfolioKeyword" :key="index" :tabindex="index" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" @click="() => this.chosenKeyword = portfolioTags">
            {{portfolioTags}}
          </a>
          
          
          
          </div>
        <!-- <div class="py-1">
          <a href="javascript:void(0)" tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a>
          </div> -->
      </div>

</div>              
</div>

<div class="container mx-auto px-6 py-8 grid sm:grid-cols-3 grid-cols-1"  >
<div v-for="portfolio in filterPortfolioData" :key="portfolio.id" class="max-w-sm rounded overflow-hidden shadow-lg mt-4 mb-4" @click="showModal(portfolio)">
  <img class="w-full" :src="portfolio.thumbnail" alt="Sunset in the mountains" >
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{portfolio.title}}</div>
    <p class="text-gray-700 text-base">
      {{portfolio.description}}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2" >
    <!-- <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" v-for="tag in portfolio.tags">{{tag}}</span> -->
    
  </div>
</div>
  </div>
    
    
  
</template>
<script>
import PortfolioList from '@/data/PortfolioList.js';
import Card from "../components/Card.vue";
import Modal from '../components/Modal.vue'
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
    Modal
  },
  data(){
    return{
      portfolioList: PortfolioList,
      portfolioKeyword: ['All'],
      chosenKeyword: null,
      choosedPortfolioSkills: null,
      isOpen: false,
      portfolioModalValue: {},
      show: false,
    }
  },
  computed: {
filterPortfolioData() {
  console.log('itworks firlter')
         if(this.chosenKeyword === 'All'){
           return this.portfolioList
         } else if(this.chosenKeyword){

         return this.portfolioList.filter(portfolio => portfolio.tags.includes(this.chosenKeyword))
       } 
       return this.portfolioList
       

      //  console.log(filter, 'filtered=====')
     },
  },
  
  mounted() {
    // this.Modal.showModal();
    this.keywordPortfolio()
    console.log(this.portfolioList, '+++++')
  },
  
  methods: {
     showModal: function(value, ref){
       console.log(this.$refs.modalbackdrop)
         this.isOpen=!this.isOpen;
         
         if(value){
           this.portfolioModalValue=value;
         }
         
        //  if(value){

        //    this.portfolioModal = value;
        // //  }
        //  console.log('is working', this.isOpen)
     },
     filterDropdown: function() {
    if (this.chosenKeyword){
      return this.chosenKeyword
    }
    return 'Filter'
  },
     debug: function(){
       console.log(this.portfolioKeyword);
     },
     keywordPortfolio: function (value){
       PortfolioList.map(data => {
         data.tags.map(tag => {
           if(!this.portfolioKeyword.includes(tag)){

             this.portfolioKeyword.push(tag)
           }
         }
         )
       })
       
       console.log(this.portfolioKeyword, 'portfolioKeyword+++')
     },
     
     addKeyword: function(){},
     next: function(value){
       
      //   var portfolioModalValue = this.portfolioModalValue
        
      //   const data2 = this.portfolioList.map((item, index) => {
          
        //    return item[portfolioModalValue.slideNumber]
        //  })
       const filteredData = this.portfolioList.filter(
         x=> 
         x.slideNumber === value + 1
       ).map(x => this.portfolioModalValue = x)
  
      // // this.portfolioModalValue = 
      console.log('this working', filteredData,'====', this.portfolioModalValue)
      // console.log(value)
     },
     prev: function(value){
       
      //   var portfolioModalValue = this.portfolioModalValue
        
      //   const data2 = this.portfolioList.map((item, index) => {
          
        //    return item[portfolioModalValue.slideNumber]
        //  })
      //   const filteredData = this.portfolioList.filter(portfolio => portfolio.tags.includes(this.chosenKeyword)).filter(
      //    (x, index)=> {
      //     console.log(this.portfolioList.filter(portfolio => portfolio.tags.includes(this.chosenKeyword)), "this.preveportfolio", index)
      //    return this.portfolioList.length === index-1
      //    }
      //  ).map(x => this.portfolioModalValue = x)

      const filteredData = this.portfolioList.filter(portfolio => portfolio.tags.includes(this.chosenKeyword)).filter(
        (x, index)=> {
         console.log(this.portfolioList, "this.preveportfolio", index)
        x.slideNumber === value - 1}
      ).map(x => this.portfolioModalValue = x)

      // // this.portfolioModalValue = 
      console.log('this working', filteredData)
      // console.log(value)
     },
    //  filterPortfolio: function(value){
    //    console.log('it runs')
    //    const filterData = this.portfolioList.filter(
    //      x => x.skills.includes("Thunder")
    //    ).map(x => 
    //   this.portfolioList = x)
    //    console.log(filterData, '888888888888888' )
    //  }
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
