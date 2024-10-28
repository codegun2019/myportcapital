<template>
  <div :style="{ backgroundImage: `url(${section1_1})`, backgroundSize: 'cover', backgroundPosition: '100%' }" class="z-30 relative bg-right-top bg-light 2xl:bg-bottom bg-top 2xl:bg-contain xl:bg-contain lg:bg-contain 2xl:bg-left bg-no-repeat bg-black text-white flex items-center justify-center">
    <section class="px-[16px]" id="buysell-section">
      <div class="container mx-auto">
        <div class="container-section-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Left side image (now on the left) -->
            <div class="order-2 md:order-1">
              <div class="flex justify-center md:pb-0 mt-16">
                <ForAndoid/>
                <img data-aos="fade-in" data-aos-duration="3000" :src="section3_2" alt="custom-image" />
              </div>
            </div>

            <!-- Right side content (now on the right) -->
            <div class="order-1 md:order-2">
              <h2 class="text-5xl font-bold mb-1 mt-24 pt-10 text-center 2xl:text-left xl:text-left">
                <span class="text-primary-400">myport </span> สำหรับ Android
              </h2>
              <p class="text-gray-400 mt-[28px] text-center mb-2 text-button-2 md:text-heading-body lg:text-start">
                เข้าถึงตลาด CFD ผ่านแอปพลิเคชันมือถือที่ออกแบบมาให้ใช้งานง่าย ด้วยการดำเนินการตามคำสั่งที่รวดเร็ว
                และประสิทธิภาพสูงสุดเพื่อการซื้อขายที่ราบรื่น
              </p>
              <div class="flex justify-center lg:justify-start">
                <img data-aos="fade-in" data-aos-duration="9000" :src="IosImage" class="w-[200px]" alt="custom-image" />
              </div>

              <div class="mt-8 flex justify-center gap-6 lg:justify-start">
                <!-- Embedded content or widgets -->
                <div class="your-widget-1" data-your-app-lazy="true"></div>
                <div class="your-widget-2" data-your-app-lazy="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import section1_1 from '~/assets/images/platforms/section4/01_Background.jpg'
import section3_2 from '~/assets/images/platforms/section4/02_Device.png'
import section3_3 from '~/assets/images/platforms/section3/03_Shadow.png'

import ForAndoid from '~/components/composables/Forandroid.vue'
import BuyphoneImage from '~/assets/images/tradeonmobile.png'

import IosImage from '~/assets/images/platforms/google-play-badge.png'
import IosForImage from '~/assets/images/platforms/for-android.png'
</script>

<style scoped>
</style>
