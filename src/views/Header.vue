<template>
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
    <h1 class="font-bold text-6xl body-font font-heading">
      HOLA!!
    </h1>
    <h1 class="font-bold text-6xl mt-2 body-font font-heading">
      I AM RIVER
    </h1>
    <p class="text-2xl mt-4 body-font font-sans">
      A Junior Full-Stack Developer who focus on building an app that meet the user requirement using javascript  especially react for front-end and nodejs for back-end development
    </p>
    <Button class="bg-primary hover:bg-blue-400 text-white mt-6 py-[15px] " >
      <a href="images/MyResume.png" download="MyResume.png" class="text-xl font-semibold mx-4  height">Download CV</a>
    </Button>
    
    </div>
    <div class="flex mx-auto">
  <img src="images/image1.png" alt="" srcset="">
  </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
    name: "Header",
    components: {
      Button
    }
}
</script>

<style>
</style>