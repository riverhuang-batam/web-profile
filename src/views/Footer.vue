<template>
  <div class="">
    <h1 class="font-bold text-3xl text-center">Contact Me</h1>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 px-8 py-5">
      <div class="lg:col-start-2 lg:col-end-7 flex justify-center">
        <img src="images/image2.png" alt="" srcset="" />
      </div>
      <div class=" lg:col-end-7  xl:col-start-11    mt-10 ">
        <form @submit.prevent="sendEmail">
          <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-medium body-font font-sans">Your name</label>
            <input
              type="text"
              class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-blue-400"
              placeholder="Name"
              v-model="name"
              name="name"
              required
            />
            <!-- <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span> Username available!</p> -->
          </div>

          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 body-font font-sans"
              >Your email</label
            >
            <input
              type="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
              placeholder="name@email.com"
              v-model="email"
              name="email"
              required
            />
          </div>

          <div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 body-font font-sans"
              >Your message</label
            >
            <textarea
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
              v-model="message"
              name="message"
              required
            ></textarea>
          </div>
          <!-- <button type="button" value="Send">Submit</button> -->
          <div class="flex justify-end mt-4 ">
            <Button class="text-xl bg-primary hover:bg-blue-400 text-white mt-4 " type="submit" value="Send">
            Send
            </Button>
          </div>
        </form>
      </div>
    </div>

    <div class="pt-4 pb-4">
      <p class="text-center">Copyright made by River</p>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import Button from "../components/Button.vue";
export default {
  name: "Footer",
  components: {
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID, // import.meta.env is the same as process.env because this is project create using vite
          import.meta.env.VITE_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_PUBLIC_KEY,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (err) {
        console.log(err);
      }
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style></style>
