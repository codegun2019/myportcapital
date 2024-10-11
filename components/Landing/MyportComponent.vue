<template>
  <div class="bg-black text-white md:py-16 py-5 md:px-16 px-5">
    <section class="container mx-auto" id="section-myport">
      <div class="rounded-t-[24px] border px-10 border-Color/background-card">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <!-- Text Section -->
          <div class="md:w-1/2 md:py-16 py-8">
            <h2 class="text-4xl font-bold">
              {{ $t("Home.Myport_welcome_title") }} <span class="text-primary-400 underline">my<span class="text-white">port</span></span>
            </h2>
            <p class="mt-4 text-lg text-gray-400">
              {{ $t("Home.Myport_welcome_description") }}
            </p>
            <div class="mt-6 flex flex-col xl:flex-row space-x-0 xl:space-x-4">
              <a href="#" class="px-6 py-3 text-center mb-5 xl:mb-0 bg-primary-600 text-white rounded-full hover:bg-primary-700">
                {{ $t("Home.Myport_welcome_cta") }}
              </a>
              <a href="#" class="px-6 py-3 text-center border border-primary-600 text-primary-600 rounded-full hover:bg-gray-800">
                {{ $t("Home.Myport_welcome_ctb") }}
              </a>
            </div>
          </div>

          <!-- Image Section -->
          <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16">
            <img :src="myportImage" :alt="$t('Home.Myport_welcome_title')" class="w-[80%] h-auto mx-auto">
          </div>
        </div>
      </div>

      <!-- Grid Section -->
      <div
        class="grid grid-cols-1 divide-y divide-Color/background-card rounded-b-[24px] border border-t-0 border-Color/background-card md:grid-cols-3 md:divide-x md:divide-y-0 ">
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-chart-line"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomeone" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">{{ $t("Home.MyportBox_1_title") }}</h3>
          </div>

          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_1_title_a") }}</li>
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_2_title_a") }}</li>
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_3_title_a") }}</li>
          </ul>
        </div>
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-university"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomemoney" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">{{ $t("Home.MyportBox_2_title") }}</h3>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_1_title_b") }}</li>
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_2_title_b") }}</li>
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_3_title_b") }}</li>
          </ul>
        </div>
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-tachometer-alt"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomefast" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">{{ $t("Home.MyportBox_3_title") }}</h3>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_1_title_c") }}</li>
            <li class="flex gap-2"><img :src="checkIcon"> {{ $t("Home.MyportBox_2_title_c") }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import myportImage from '~/assets/images/trade-image.png'
import checkIcon from '~/assets/flags/check.svg'
import bighomefast from '~/assets/flags/bighomefast.svg'
import bighomeone from '~/assets/flags/bighomeone.svg'
import bighomemoney from '~/assets/flags/bighomemoney.svg'

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
