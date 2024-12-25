<template>
  <div class="bg-black text-white z-10 relative" :style="{ backgroundImage: `url(${section1_1})`, backgroundSize: 'cover', backgroundPosition: 'left' }">
    <section class="mx-auto" id="section-myport">
      <div class="px-10">
        <div class="container mx-auto flex flex-col md:flex-row min-h-fit items-center justify-between">
          <!-- Text Section -->
          <div class="md:w-1/2 md:py-16 py-8">
            <h2 class="text-4xl font-bold motion-preset-slide-left-sm motion-delay-[800ms]">
              <span class="text-primary-400">{{ $t("Platform.Header_welcome_title") }} </span>
              {{ $t("Platform.Header_welcome_subttile") }}
            </h2>
            <p class="mt-4 text-lg text-gray-400 motion-preset-blur-left block motion-delay-[1200ms]">
              {{ $t("Platform.Header_welcome_description") }}
            </p>
            <div class="mt-6 flex flex-col xl:flex-row space-x-0 xl:space-x-4 flex gap-4 ">
              <NuxtLink to="/">
                <button
                  class="py-[10px] px-[16px] motion-delay-[100ms] motion-ease-spring-bouncier motion-translate-y-in-75 motion-opacity-in bg-primary-500 text-whire rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
                >
                {{ $t("Platform.Trader_welcome_ctb") }}
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- Image Section -->
          <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16">
            <img :src="section1_2" class="w-[80%] h-auto mx-auto">
            <img :src="section1_3" class="fix-drop-right-top block hidden md:block absolute app-mobile-icon transform  right-0 -translate-y-1/2 w-100 top-1/2 z-20">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

import section1_1 from '~/assets/images/platforms/section1/01_Background.jpg'
import section1_2 from '~/assets/images/platforms/section1/02_Device.png'
import section1_3 from '~/assets/images/platforms/section1/03_Coin.png'

import checkIcon from '~/assets/flags/check.svg'
import bighomefast from '~/assets/flags/bighomefast.svg'
import bighomeone from '~/assets/flags/bighomeone.svg'
import bighomemoney from '~/assets/flags/bighomemoney.svg'

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
