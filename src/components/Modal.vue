<template >
  <teleport to="body" >
   <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
    <div
      ref="modalbackdrop"
      class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 modal-wrapper"
      v-if="isOpen"
      @click="showModal(null, 'modal-backdrop')"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
        
      >
        <div
          class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 md:w-2/3 w-3/4"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
          @click.stop
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
  </teleport>
</template>

<script>
export default {
    name: 'Modal',
    props: {
      isOpen: Boolean,
      showModal: Function,
    },
    data() {
    return {
      modalData: null,
    };
  },
  mounted() {
    this.$nextTick(() =>{
      let self = this
      console.log(self.$refs.modalbackdrop)
    })
  }
  
}
</script>

<style>

</style>