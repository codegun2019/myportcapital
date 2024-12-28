<template>
  <section class="bg-black" id="section-start-trader">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Left image section -->
      <div class="bg-left bg-cover order-2 md:order-1 bg-no-repeat h-[340px]" :style="{
          backgroundImage: `url(${section7_1})`,
        }">
      </div>
      <!-- Right content section -->
      <div class="order-1 md:order-2 flex items-center px-[16px] pb-[62px] pt-[16px] md:pb-0 md:pt-[0]">
        <div class="lg:p-20 px-1 py-10">
          <div>
            <h2 data-aos="fade-up" data-aos-duration="1000" class="text-4xl mt-5 mb-5 font-bold lg:text-left xl:tex-teft text-center">
              <span class="text-white">{{ $t("Home.Start_welcome_title") }}</span>
            </h2>
            <p data-aos="fade-up" data-aos-duration="2000" class="mt-2 text-center text-secondary-400 md:text-start lg:text-body-3">
              {{ $t("Home.Start_welcome_description") }}
            </p>
          </div>
          <div class="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <NuxtLink href="">
              <button data-aos="fade-up" data-aos-duration="3000"
                class="py-[10px] px-[16px] bg-primary-500 text-primary-900 rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
              >
              {{ $t("Home.Start_welcome_cta") }}
              </button>
            </NuxtLink>
            <NuxtLink href="">
              <button data-aos="fade-up" data-aos-duration="6000"
                class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
              >
              {{ $t("Home.Start_welcome_ctb") }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import section7_1 from '~/assets/images/landing/section7/01_Device.jpg'

import BglightImage from '~/assets/images/bg-light.png'
import footerImage from '~/assets/images/landing/footer-img.png'
</script>
