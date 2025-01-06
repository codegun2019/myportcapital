<template>
  <section class="bg-black bg-cover min-h-screen  xl:bg-cover bg-bottom bg-no-repeat" :style="{
        backgroundImage: `url(${section_bg})`,
      }">
    <div class="
    text-white md:py-16 py-5 md:px-16 px-5 items-center justify-center"
    >
      <div class="text-center md:mt-10 mt-14 pt-14 md:pt-2">
        <h1 class="text-4xl font-bold mb-4 motion-preset-fade motion-delay-[700ms]">
          {{ $t("Promotion.Header_welcome_title") }} my <span class="text-primary-500">Promotion</span>
        </h1>
        <!-- คำอธิบาย -->
        <p class="text-lg text-gray-400 max-w-[45rem] mx-auto mb-8 motion-preset-fade-lg motion-delay-[1s]">
          {{ $t("Promotion.Header_welcome_subttile") }}
        </p>
      </div>
            <!-- Image Section -->
        <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16">
          <img :src="section1_3" class="w-100 absolute  transform  left-[120px] lg:left-[250px] bottom-[-60px] z-30 motion-preset-pulse-sm motion-duration-20">
          <img :src="section1_2" class="block hidden md:block absolute app-mobile-icon transform  right-0 -translate-y-1/3 w-100 top-1/2 z-20">
        </div>
    </div>
  </section>
  </template>

<script lang="ts" setup>
  import section_bg from '~/assets/images/promotion/01_promotion_top.jpg'
  import section1_2 from '~/assets/images/promotion/03_device.png'
  import section1_3 from '~/assets/images/promotion/06_gift.png'

</script>

<style scoped>
.fix-drop-right-top {
  position: absolute;
  /* transform: translate(600px, 106px); */
  -webkit-animation: fix-drop-right-top-mover 3.5s infinite alternate;
  animation: fix-drop-right-top-mover 3.5s infinite alternate;
}
@keyframes fix-drop-right-top-mover {
  0% {
    transform: translate(0, -37%);
  }
  100% {
    transform: translate(0, -33%);
  }
}
</style>
