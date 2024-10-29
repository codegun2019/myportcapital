<template>
  <div class="bg-black text-white md:py-16 py-5 md:px-16 px-5 min-h-screen flex items-center justify-center">
    <section class="container mx-auto" id="section-myport">
      <div class="bg-black text-white py-16">
        <div class="container mx-auto text-center">
          <h3 data-aos="fade-up" data-aos-duration="1000" class="text-5xl font-bold mb-24 mt-24">
            {{ $t("Home.WordTitle") }}<span class="text-primary-400">{{ $t("Home.WordTitleSub") }}</span>{{ $t("Home.WordTitleSub_row") }}
          </h3>

          <div data-aos="fade-up" data-aos-duration="555" class="mt-5 flex flex-wrap justify-center gap-4 mx-auto">
            <!-- Loop through icons -->
            <div
              v-for="(icon, index) in icons"
              :key="index"
              class="bg-black h-full border border-dark-400 rounded-[24px] h-60 p-4 relative w-full max-w-md"
            >
              <div class="flex items-center justify-between">
                <!-- Icon and text section -->
                <div class="flex items-center space-x-4">
                  <!-- Icon -->
                  <div class="w-22 h-22 flex items-center justify-center ">
                    <img data-aos="fade-up" data-aos-duration="1000" :src="icon.image" :alt="icon.alt" class="mt-5 w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:h-[120px] lg:w-[120px]">
                  </div>
                  <!-- Text content -->
                  <div>
                    <h3 data-aos="fade-up" data-aos-duration="1000" class="text-white font-semibold">{{ icon.title }}</h3>
                    <p data-aos="fade-up" data-aos-duration="1000" class="text-gray-400 text-sm">{{ icon.description }}</p>
                  </div>
                </div>
                <!-- New badge -->
                <div data-aos="fade-up" data-aos-duration="1000" class="bg-primary-500 text-primary-900 text-sm px-2 py-1 rounded-full">
                  {{ $t("new") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Word1Image from '~/assets/flags/cfds.svg';
import section2_1 from '~/assets/images/landing/section4/icon_01.svg';
import section2_2 from '~/assets/images/landing/section4/icon_01.svg';
import section2_3 from '~/assets/images/landing/section4/icon_01.svg';
import section2_4 from '~/assets/images/landing/section4/icon_01.svg';
import section2_5 from '~/assets/images/landing/section4/icon_01.svg';
import section2_6 from '~/assets/images/landing/section4/icon_01.svg';

// Array of icon data
const icons = [
  { image: section2_1, alt: 'Icon 1', title: 'Currency 1', description: '63+ products' },
  { image: section2_2, alt: 'Icon 2', title: 'Currency 2', description: '63+ products' },
  { image: section2_3, alt: 'Icon 3', title: 'Currency 3', description: '63+ products' },
  { image: section2_4, alt: 'Icon 4', title: 'Currency 4', description: '63+ products' },
  { image: section2_5, alt: 'Icon 5', title: 'Currency 5', description: '63+ products' },
  { image: section2_6, alt: 'Icon 6', title: 'Currency 6', description: '63+ products' },
];
</script>

<style scoped>
.border-dark-400 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

</style>
