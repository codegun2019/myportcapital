<template>
  <div class="bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 min-h-screen flex items-center justify-center">
    <section class="container mx-auto" id="section-myport">
      <div class="bg-dark-500 text-white py-16">
        <div class="container mx-auto text-center">
          <h3 class="text-5xl font-bold mb-24 mt-24">
            {{ $t("Home.WordTitle") }}<span class="text-primary-400">{{ $t("Home.WordTitleSub") }}</span>{{ $t("Home.WordTitleSub_row") }}
          </h3>

          <div class="mt-5 flex flex-wrap justify-center gap-4 mx-auto" style="max-width:895px">
            <!-- Card 1 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="section4_1" alt="CFD Icon" class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">{{ $t("currency") }}</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 60+ </span>{{ $t("product") }}
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="section4_2" alt="Stock Icon" class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">{{ $t("share") }}</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 120+ </span>{{ $t("product") }}
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="section4_3" alt="Index Icon" class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">{{ $t("index") }}</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 23+ </span>{{ $t("product") }}
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="section4_4" alt="Crypto Icon" class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">{{ $t("crypto_cfd") }}</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 5+ </span>{{ $t("product") }}
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="section4_5" alt="Commodity Icon" class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">{{ $t("commodity") }}</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 19+ </span>{{ $t("product") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import section4_1 from '~/assets/images/landing/section4/icon_01.svg'
import section4_2 from '~/assets/images/landing/section4/icon_02.svg'
import section4_3 from '~/assets/images/landing/section4/icon_03.svg'
import section4_4 from '~/assets/images/landing/section4/icon_04.svg'
import section4_5 from '~/assets/images/landing/section4/icon_05.svg'
import Word1Image from '~/assets/flags/cfds.svg'
</script>

<style scoped>
.border-dark-400 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

.bg-dark-500 {
  background-color: #121212;
}
</style>
