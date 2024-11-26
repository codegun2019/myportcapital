<template>
  <div :style="{ backgroundImage: `url(${section1_1})`, backgroundSize: 'cover', }" class="z-10 relative bg-right-top md:bg-right-top bg-primaryDarkNight 2xl:bg-bottom bg-top 2xl:bg-contain xl:bg-contain lg:bg-contain 2xl:bg-left bg-no-repeat bg-black text-white  flex items-center justify-center">
    <section class="px-[16px]" id="buysell-section">
      <div class="container mx-auto">
        <div class="container-section-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 class="text-5xl font-bold mb-1 mt-24 text-center 2xl:text-left xl:text-left">
                <span class="text-primary-500">myport </span> {{ $t("Platform.Header_ios_title") }}
              </h2>
              <p class="text-gray-400 mt-[28px] text-center mb-2 text-button-2 md:text-heading-body lg:text-start">
                {{ $t("Platform.Header_ios_description") }}
              </p>
              <div class="flex justify-center lg:justify-start">
                <img data-aos="fade-in" data-aos-duration="9000" :src="IosImage" class="w-[200px]" alt="custom-image" />
              </div>

              <div class="mt-8 flex justify-center gap-6 lg:justify-start">
                <!-- Embedded content or x widgets -->
                <div class="your-widget-1" data-your-app-lazy="true"></div>
                <div class="your-widget-2" data-your-app-lazy="true"></div>
              </div>
            </div>
            <!-- Left side image (now on the right) -->
            <div class="" >
              <div class="flex justify-center  pb-0 md:pb-0 mt-16">
                <Forios/>
                <img class="z-10 relative" data-aos="fade-up" data-aos-duration="3000" :src="section3_2" alt="custom-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import section1_1 from '~/assets/images/platforms/section3/01_Background.jpg'
import section3_2 from '~/assets/images/platforms/section3/02_Device.png'
import section3_3 from '~/assets/images/platforms/section3/03_Shadow.png'


import Forios from '~/components/composables/Forios.vue'
import ForAndoid from '~/components/composables/Forandroid.vue'
import BuyphoneImage from '~/assets/images/tradeonmobile.png'

import IosImage from '~/assets/images/platforms/google-play-badge.png'
import IosForImage from '~/assets/images/platforms/for-ios.png'
</script>

<style scoped>
</style>
