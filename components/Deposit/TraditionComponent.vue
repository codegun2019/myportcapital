<template>
  <section class="bg-primaryDarkNight" id="section-start-trader">
    <div class="grid grid-cols-1 md:grid-cols-2 min-h-1 md:min-h-screen bg-cover bg-cover bg-no-repeat" :style="{
          backgroundImage: `url(${section2_1})`,
        }" >
      <!-- Right content section -->
      <div class="flex items-center px-[16px] pb-[62px] pt-[16px] md:pb-0 md:pt-[0]">
        <div class="px-5">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="1000" class="text-4xl font-bold mb-4 text-center md:text-left mt-10 md:mt-1">
              <span class="text-white">{{ $t("Deposit.Header_welcome_title") }} my</span>
              <span class="text-primary-500">port</span>
              <span class="text-white"></span>
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" class="mt-2 text-center text-white md:text-start lg:text-body-3">
              {{ $t("Deposit.Header_welcome_subttile") }}
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" class="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <NuxtLink
                class="font-bold inline-flex items-center cursor-pointer justify-between border border-gray-400 hover:scale-110 transform-gpu rounded-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ease-in-out"
              >
                <span>{{ $t("Deposit.Header_welcome_cta") }}</span>
                <span
                  class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
                >
                  <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
                </span>
              </NuxtLink>
          </div>
        </div>
      </div>
      <!-- Left image section -->
      <div class="flex justify-center items-center min-h-20 md:min-h-screen">
        <!-- <div class="mx-auto text-center">
          <img :src="footerImage" alt="img-footer" />
        </div> -->
      </div>

    </div>
  </section>
</template>

<script setup>
import section2_1 from '~/assets/images/deposit/section2/01_Background.jpg'

import senre from '~/assets/flags/senre.svg'
import BglightImage from '~/assets/images/bg-light.png'
import footerImage from '~/assets/images/imgpsh_fullsize_anim.png'
</script>
