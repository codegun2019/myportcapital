<template>
  <div :style="{
      backgroundImage: `url(${BglightImage})`,
    }" class="bg-light 2xl:bg-bottom bg-top 2xl:bg-contain xl:bg-contain lg:bg-contain 2xl:bg-left bg-no-repeat bg-black text-white flex items-center justify-center">
    <section  class=" pt-[62px] md:pt-[125px]" id="buysell-section">
      <div class=" mx-auto">
        <div class="container-section-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Left side image -->
            <div class="">
              <div class="flex justify-center pb-[62px] md:pb-0 mt-16">
                <div class="relative w-full h-[600px]">
                  <img data-aos="fade-in" data-aos-duration="6000" :src="section5_1" class="fix-drop-strone hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 h-auto">
                  <img data-aos="fade-in" data-aos-duration="6000" :src="section5_2" :alt="$t('Home.Buysell_welcome_title')"
                      class="absolute left-1/2 transform -translate-x-1/2 bottom-16  h-auto z-10">
                  <img data-aos="fade-in" data-aos-duration="6000" :src="section5_3" 
                  class="absolute app-mobile-icon fix-drop-right-top transform -translate-x-2/10  -translate-y-1/2 top-2/4 w-24 h-24 z-20">
                  <img :src="section5_4" class="absolute bottom-0 hidden md:block left-1/2 transform -translate-x-1/2 h-auto">    
                </div>
              </div>
            </div>
            <!-- Right side content -->
            <div>
              <h2 class="text-5xl font-bold mb-24 mt-44 text-center 2xl:text-left xl:text-left">
                {{ $t("Home.Buysell_welcome_title") }} <span class="text-primary-400">{{ $t("Home.Buysell_welcome_title_sub") }}</span>
              </h2>
              <p class="mt-[28px] text-center text-button-2 md:text-heading-body lg:text-start">
                {{ $t("Home.Buysell_welcome_description") }}
              </p>
              <div class="flex justify-center lg:justify-start">
                <a href="" class="mt-[16px]">
                  <button class="bg-transparent hover:text-secondary text-primary flex items-center font-[500]">
                    {{ $t("Home.Buysell_welcome_cta") }} &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </a>
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

import BglightImage from '~/assets/images/landing/section5/01_Banner.jpg'
import section5_1 from '~/assets/images/landing/section5/02_Stone.png'
import section5_2 from '~/assets/images/landing/section5/04_Device.png'
import section5_3 from '~/assets/images/landing/section5/05_Icon_App.png'
import section5_4 from '~/assets/images/landing/section5/03_Shadow.png'
// import BuyphoneImage from '~/assets/images/tradeonmobile.png'
// import BglightImage from '~/assets/images/bg-light.png'

</script>

<style scoped>
.app-mobile-icon{
  left: 60%;
  top: 30%;
}
.fix-drop-right-top {
  position: absolute;
  /* transform: translate(600px, 106px); */
  z-index: 11;
  -webkit-animation: fix-drop-right-top-mover 2.5s infinite alternate;
  animation: fix-drop-right-top-mover 2.5s infinite alternate;
}
@keyframes fix-drop-right-top-mover {
  0% {
    transform: translate(69%, 45%);
  }
  100% {
    transform: translate(55%, 30%);
  }
}
.fix-drop-strone {
  position: absolute;
  /* transform: translate(600px, 106px); */
  -webkit-animation: strone 99.5s infinite alternate;
  animation: strone 99.5s infinite alternate;
}
@keyframes strone {
  0% {
    transform: translate(-5%, 0%);
  }
  100% {
    transform: translate(5%, 0%);
  }
}
</style>
