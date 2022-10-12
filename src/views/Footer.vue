<template>
  <h1 class="font-bold text-3xl text-center">Contact Me</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 px-8 py-5">
    <img src="images/image2.png" alt="" srcset="" />
    <div>
      <div class="mb-6">
        <label for="username" class="block mb-2 text-sm font-medium"
          >Your name</label
        >
        <input
          type="text"
          id="username"
          class="
            border
            text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-blue-100 dark:border-blue-400
          "
          placeholder="Name"
        />
        <!-- <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> -->
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="
            shadow-sm
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
            dark:shadow-sm-light
          "
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label
          for="message"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-400
          "
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          class="
            block
            p-2.5
            w-full
            text-sm text-gray-900
            bg-gray-50
            rounded-lg
            border border-gray-300
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Leave a comment..."
        ></textarea>
      </div>
    <button>Submit</button>
    </div>
  </div>
  <div class="pt-4 pb-4">
    <p class="text-center">Copyright made by River</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>