<template>
  <div :style="{ backgroundImage: `url(${cover})` }" class="bg-no-repeat bg-right bg-auto bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 xl-min-h-screen flex items-center justify-center">
    <section class="text-white py-24" id="accounting-section">
      <div class="container mx-auto text-center">
        <!-- หัวข้อ -->
        <h1 class="text-4xl font-bold mb-4 motion-preset-slide-left-sm motion-delay-[800ms]">
          {{ $t("Accounting.Header_welcome_title") }}<span class="text-primary-500">{{ $t("Accounting.Header_welcome_subttile") }}</span>
        </h1>

        <!-- คำอธิบาย -->
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8 motion-preset-blur-left block motion-delay-[1200ms]">
          {{ $t("Accounting.Header_welcome_description") }} {{ $t("Accounting.Header_welcome_subdescription") }}
        </p>

        <!-- ปุ่ม CTA -->
        <NuxtLink
          to=""
          class="inline-block bg-primary-500 text-white py-3 px-6 rounded-full hover:bg-primary-800 transition-all  motion-preset-blur-left block motion-delay-[1400ms]"
        >
          {{ $t("Accounting.Header_welcome_cta") }}
        </NuxtLink>
                  <!-- Image Section -->
      <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16 ">
        <img :src="section1_2" class="motion-preset-fade motion-delay-[700ms] block hidden md:block absolute transform  right-0  w-100 top-10 z-20">
      </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import section1_2 from '~/assets/images/accounting/02_hand.jpg'
import Word1Image from '~/assets/flags/cfds.svg'
import cover from "~/assets/images/accounting/01_background.jpg";
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
