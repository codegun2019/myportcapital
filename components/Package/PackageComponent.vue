<template>
<div class="bg-dark-500 text-white md:py-16 xl-min-h-screen  py-5 md:px-16 px-5 items-center justify-center">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4 motion-preset-fade-lg motion-delay-500">
      {{ $t("Package.Header_welcome_title") }}<span class="text-primary-500">{{ $t("Package.Header_welcome_subttile") }}</span>
    </h1>
    <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8 motion-preset-fade-lg motion-delay-1000">
      {{ $t("Package.Header_welcome_description") }} {{ $t("Package.Header_welcome_subdescription") }}
    </p>
  </div>
  <section class="flex flex-col container mx-auto md:flex-row justify-center gap-8 px-4 py-12" id="section-package">
  <!-- Fixed Account Card -->
  <div data-aos="fade-up" data-aos-duration="500" class="bg-gradient-to-b from-[#333333] to-[#222222] text-white rounded-xl p-6 shadow-lg w-full md:w-1/3">
    <p class="text-gray-500 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">{{ $t("Package.Package_welcome_title_1") }}</h3>
    <p class="text-gray-300 mb-4">
      {{ $t("Package.Package_welcome_description_1") }}
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-400 mb-6 space-y-2">
      <li>- {{ $t("Package.Package_Space_1") }}</li>
      <li>- {{ $t("Package.Package_CommissionLeverag_1") }}</li>
      <li>- {{ $t("Package.Package_Leverage_1") }}</li>
      <!-- <li>- {{ $t("Package.Package_Lotback_1") }}</li> -->
      <li>- {{ $t("Package.Package_Stop_out_1") }}</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-gray-400 hover:scale-110 transform-gpu rounded-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ease-in-out"
    >
      <span> {{ $t("buttons.open_account") }}</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
      <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>

  <!-- Standard Account Card (Most Popular) - This card is larger -->
  <div data-aos="fade-up" data-aos-duration="800" class="bg-gradient-to-b from-primary-900 to-primary-500 text-white rounded-xl p-6 shadow-lg w-full md:w-1/3 relative md:scale-105 md:h-auto">
    <div class="absolute top-4 right-4 most-popular-label text-white px-3 py-1 rounded-full text-sm">{{ $t("buttons.Mostpopular") }}</div>
    <p class="text-gray-200 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">{{ $t("Package.Package_welcome_title_2") }}</h3>
    <p class="text-gray-100 mb-4">
      {{ $t("Package.Package_welcome_description_2") }}
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-100 mb-6 space-y-2">
      <li>- {{ $t("Package.Package_Space_2") }}</li>
      <li>- {{ $t("Package.Package_CommissionLeverag_2") }}</li>
      <li>- {{ $t("Package.Package_Leverage_2") }}</li>
      <li>- {{ $t("Package.Package_Lotback_2") }}</li>
      <li>- {{ $t("Package.Package_Stop_out_2") }}</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-white rounded-full px-4 py-2 text-dark-900 bg-white hover:scale-110 transform-gpu transition duration-300 ease-in-out"
    >
      <span>{{ $t("buttons.open_account") }}</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
      <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>

  <!-- Pro Account Card -->
  <div data-aos="fade-up" data-aos-duration="1200" class="bg-gradient-to-b from-[#333333] to-[#222222] text-white rounded-xl p-6 shadow-lg w-full md:w-1/3">
    <p class="text-gray-500 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">{{ $t("Package.Package_welcome_title_3") }}</h3>
    <p class="text-gray-300 mb-4">
      {{ $t("Package.Package_welcome_description_3") }}
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-400 mb-6 space-y-2">
      <li>- {{ $t("Package.Package_Space_3") }}</li>
      <li>- {{ $t("Package.Package_CommissionLeverag_3") }}</li>
      <li>- {{ $t("Package.Package_Leverage_3") }}</li>
      <!-- <li>- {{ $t("Package.Package_Lotback_3") }}</li> -->
      <li>- {{ $t("Package.Package_Stop_out_3") }}</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-gray-400 hover:scale-110 transform-gpu rounded-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ease-in-out"
    >
      <span>{{ $t("buttons.open_account") }}</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
        <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>
</section>

</div>
</template>

<script setup>
import senre from '~/assets/flags/senre.svg'
</script>

<style scoped>
.most-popular-label {
    padding: .25rem .75rem;
    background-image: linear-gradient(149deg, rgba(255, 255, 255, 0.17) 11.45%, rgba(255, 255, 255, 0.05) 121.43%);
    border-radius: 1.5rem;
}
</style>
