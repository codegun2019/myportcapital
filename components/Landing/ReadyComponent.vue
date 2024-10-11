<template>
  <div class="bg-primaryDarkNight text-white py-16 px-4 lg:px-24 pt-16">
    <section class="container mx-auto" id="section-ready">
    <!-- Section Header -->
      <div class="text-center my-10">
        <h2 class="text-5xl font-bold mb-24 mt-24">
          <span class="text-primary-400">myport</span> {{ $t("Home.ReadyTitleSub") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16 mb-24">
        <!-- Card 1: Market Analysis -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">{{ $t("Home.ReadyTitle_a") }}</h3>
            <p class="text-gray-400 mb-6">
              {{ $t("Home.ReadyTitleSub_a") }}
            </p>
          </div>
          <img :src="Ready1Image" :alt="$t('Home.ReadyTitle_a')" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>

        <!-- Card 2: Popular Assets -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">{{ $t("Home.ReadyTitle_b") }}</h3>
            <p class="text-gray-400 mb-6">
              {{ $t("Home.ReadyTitleSub_b") }}
            </p>
          </div>
          <img :src="Ready2Image" :alt="$t('Home.ReadyTitle_b')" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>

        <!-- Card 3: Economic Calendar -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">{{ $t("Home.ReadyTitle_c") }}</h3>
            <p class="text-gray-400 mb-6">
              {{ $t("Home.ReadyTitleSub_c") }}
            </p>
          </div>
          <img :src="Ready3Image" :alt="$t('Home.ReadyTitle_c')" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
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
