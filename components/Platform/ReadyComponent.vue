<template>
  <div class="bg-primaryDarkNight text-white py-16 px-4 lg:px-24 pt-16">
    <section class="container mx-auto" id="section-ready">
    <!-- Section Header -->
      <div class="text-center my-10">
        <h2 class="text-5xl font-bold mb-24 mt-24" data-aos="fade-up" data-aos-duration="500">
          {{ $t("Home.PlatformTitleSub") }} <span class="text-primary-500">myport</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16 mb-24">
        <!-- Card 1: Market Analysis -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="9000" class="text-3xl font-bold mb-4">
              <span>my </span>
              <span class="text-primary-500"> lotback</span>
            </h3>
            <p class="text-gray-400 mb-6" data-aos="fade-up" data-aos-duration="18000">
              {{ $t("Home.PlatformTitleSub_a") }}
            </p>
          </div>
          <div class="shadow-container bg-no-repeat" :style="{ backgroundImage: `url(${section3_bg})`, backgroundSize: 'cover', backgroundPosition: 'left' }">
            <img :src="section3_1" data-aos="fade-up" data-aos-duration="12000" :alt="$t('Home.PlatformTitle_a')" class="w-1/1.5 h-auto mx-auto rounded-lg">
          </div>
        </div>

        <!-- Card 2: Popular Assets -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="9000" class="text-3xl font-bold mb-4">
              <span>my </span>
              <span class="text-primary-500"> trade</span>
            </h3>
            <p class="text-gray-400 mb-6" data-aos="fade-up" data-aos-duration="12000">
              {{ $t("Home.PlatformTitleSub_b") }}
            </p>
          </div>
          <div class="shadow-container bg-no-repeat" :style="{ backgroundImage: `url(${section3_bg})`, backgroundSize: 'cover', backgroundPosition: 'left' }">
            <img :src="section3_2" data-aos="fade-down" data-aos-duration="12000" :alt="$t('Home.PlatformTitle_a')" class="w-1/1.5 h-auto mx-auto rounded-lg">
          </div>
        </div>

        <!-- Card 3: Economic Calendar -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="9000" class="text-3xl font-bold mb-4">
              <span class="text-primary-500"> Indicator</span>
            </h3>
            <p class="text-gray-400 mb-6" data-aos="fade-up" data-aos-duration="6000">
              {{ $t("Home.PlatformTitleSub_c") }}
            </p>
          </div>
          <div class="shadow-container bg-no-repeat" :style="{ backgroundImage: `url(${section3_bg})`, backgroundSize: 'cover', backgroundPosition: 'left' }">
            <img :src="section3_3" data-aos="fade-up" data-aos-duration="12000" :alt="$t('Home.PlatformTitle_a')" class="w-1/1.5 h-auto mx-auto rounded-lg">
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>


import section3_1 from '~/assets/images/landing/section3/01_Device.png'
import section3_2 from '~/assets/images/landing/section3/02_Device.png'
import section3_3 from '~/assets/images/landing/section3/03_Device.png'
import section3_bg from '~/assets/images/landing/section3/01_Background.jpg'

import Ready1Image from '~/assets/images/ready_1.png'
import Ready2Image from '~/assets/images/ready_2.png'
import Ready3Image from '~/assets/images/ready_3.png'

</script>

<style scoped>
.border-Color\/background-card {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

*,
::before,
::after {

  border-color: #272727;
}
</style>
