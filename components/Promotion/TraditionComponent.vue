<template>
  <section class="bg-black bg-cover bg-no-repeat" id="section-promotion"
  :style="{
      backgroundImage: `url(${section_bg})`,
    }"
  >
    <div class="text-center">
      <h2 class="text-white font-bold mb-4 motion-preset-fade motion-delay-[700ms]">
        <span class="text-3xl ">{{ $t("Promotion.Header_bonus_title") }}</span><br>
        <span class="text-xl ">{{ $t("Promotion.Header_bonus_title_sub") }}</span>
      </h2>
      
    </div>
    <div class="flex justify-center items-center min-h-screen p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
        <!-- Card 1: My Bonus -->
        <div  data-aos="fade-up" data-aos-duration="600"  class="backdrop-blur-sm hover:backdrop-blur-lg flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 scale-95 hover:scale-105 transform-gpu transition duration-300 ease-in-out border-card-100 hover:border-primary-500 rounded-xl shadow-md p-6 text-white relative hover:shadow-lg transition duration-300 ease-in-out flex flex-col">
          <div class="mb-20">
            <h2 class="text-2xl font-semibold mb-2">my <span class="font-bold text-primary-500">{{ $t("Promotion.Header_Tradition_title_1") }}</span></h2>
            <p class="text-sm mb-4">
              {{ $t("Promotion.Header_Tradition_subttile_1") }}
            </p>
          </div>
          <div class="flex items-center justify-between mt-auto pt-4">
            <h3 class="text-5xl font-bold text-primary-400">{{ $t("Promotion.Header_Tradition_price_1") }}</h3>
            <div class="text-white bg-primary-400 rounded-full p-2 cursor-pointer">
              <arrow-icon />
            </div>
          </div>
        </div>
        
        <!-- Card 2: My Lotback -->
        <div  data-aos="fade-up" data-aos-duration="1200"  class="backdrop-blur-xl bg-white/20 bg-card-50 border-2 hover:scale-105 transform-gpu transition duration-300 ease-in-out border-card-100 hover:border-primary-500 rounded-xl shadow-md p-6 text-white relative hover:shadow-lg transition duration-300 ease-in-out flex flex-col">
          <div class="mb-20">
            <h2 class="text-2xl font-semibold mb-2">my <span class="font-bold text-primary-500">{{ $t("Promotion.Header_Tradition_title_2") }}</span></h2>
            <p class="text-sm mb-4">
              {{ $t("Promotion.Header_Tradition_subttile_2") }}
            </p>
          </div>
          <div class="flex items-center justify-between mt-auto pt-4">
            <h3 class="text-5xl font-bold text-primary-400">{{ $t("Promotion.Header_Tradition_price_2") }}</h3>
            <div class="text-white bg-primary-400 rounded-full p-2 cursor-pointer">
              <arrow-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts" setup>
import ArrowIcon from '~/components/composables/ArrowIcon.vue'; // Assuming you have an ArrowIcon component
import section_bg from '~/assets/images/promotion/01_promotion.jpg'
</script>

<style scoped>
</style>
