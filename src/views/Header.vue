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
    <h1 class="font-bold text-5xl ">
      HOLA!!
    </h1>
    <h1 class="font-bold text-5xl mt-2">
      I AM RIVER
    </h1>
    <p class="text-2xl mt-4">
      A Junior Full-Stack Developer who focus on building an app that meet the user requirement using javascript  especially react for front-end and nodejs for back-end development
    </p>
    <Button class="bg-primary hover:bg-blue-400 text-white mt-4" >
      <a href="images/MyResume.png" download="MyResume.png" class="text-xl font-semibold">Download CV</a>
    </Button>
    
    </div>
    <div class="">
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