<template>
  <div class="bg-black text-white min-h-screen" id="section-header">
    <!-- Hero section -->
    <div
  :style="{ backgroundImage: `url(${cover})` }"
  class="relative text-center pt-[250px] px-5 bg-[50%_0] bg-no-repeat md:bg-cover md:bg-center h-screen overflow-hidden"
>
  <video
    aria-hidden="true"
    playsinline=""
    autoplay=""
    muted=""
    loop=""
    :poster="loadpage"
    id="hero-video"
    class="absolute top-0 grayscale brightness-100 lg:left-0 left-0 w-full h-full object-cover z-0"
    
  >
    <source :src="cover" type="video/webm" />
  </video>

  <section class="relative container mx-auto z-10" id="header-section">
    <h1 class="text-6xl font-extrabold motion-preset-slide-left-sm motion-delay-[800ms]">
      <span class="">my</span>
      <span class="text-primary-500">port</span>
      <span class="text-primary-500">.. </span>
      <span class="mr-3">my</span>
      <span class="text-primary-500">plan</span>
    </h1>
    <h2 class="text-3xl font-semibold text-primary-500 mt-4 motion-preset-blur-left block motion-delay-[1200ms]">
      <span class="text-primary-500 mr-3">{{ $t("Home.Header_welcome_title") }}</span>
      <span class="text-white">{{ $t("Home.Header_welcome_description") }}</span>
    </h2>
    <p class="text-lg mt-6 max-w-2xl mx-auto text-secondary-500 motion-preset-blur-left block motion-delay-[1400ms]">
      {{ $t("Home.Header_welcome_subttile") }}
    </p>
    <button
      class="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg  motion-preset-fade-lg  motion-delay-1500"
    >
      <span class="motion-preset-blur-left block motion-delay-[1800ms]">{{ $t("Home.Header_welcome_cta") }}</span>
    </button>
  </section>
</div>


    <!-- Hero section Tab -->
    <!-- <section class="bg-dark-900 text-white py-4">
      <div class="flex justify-between items-center text-center">
        <div class="flex-1">
          <h2 data-aos="fade-in" data-aos-duration="3500" class="text-lg font-bold">{{ $t("Home.Myport_1_title") }}</h2>
          <p class="text-sm" data-aos="fade-in" data-aos-duration="4500">{{ $t("Home.Myport_1_subtitle") }}</p>
        </div>
        <div class="flex-1">
          <h2 data-aos="fade-in" data-aos-duration="3500" class="text-lg font-bold">{{ $t("Home.Myport_2_title") }}</h2>
          <p class="text-sm" data-aos="fade-in" data-aos-duration="4500">{{ $t("Home.Myport_2_subtitle") }}</p>
        </div>
        <div class="flex-1">
          <h2 data-aos="fade-in" data-aos-duration="3500" class="text-lg font-bold">{{ $t("Home.Myport_3_title") }}</h2>
          <p class="text-sm" data-aos="fade-in" data-aos-duration="4500">{{ $t("Home.Myport_3_subtitle") }}</p>
        </div>
        <div class="flex-1">
          <h2 data-aos="fade-in" data-aos-duration="3500" class="text-lg font-bold">{{ $t("Home.Myport_4_title") }}</h2>
          <p class="text-sm" data-aos="fade-in" data-aos-duration="4500">{{ $t("Home.Myport_4_subtitle") }}</p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import cover from "~/assets/images/cover-landing.webm";
import loadpage from "~/assets/images/load_page.png";

const isDropdownOpen = ref(false);
const { locale } = useI18n();

// อ่านค่าภาษาเก่าจาก localStorage เมื่อตอนโหลดหน้าเว็บ
onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});
</script>

<style scoped>
.header {
  height: 500px;
  position: relative;
  z-index: 100;
}
.header .video-wrapper {
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
}
.header video {
  position: absolute;
  height: auto;
  width: 100%;
  min-height: 100%;
}
audio, canvas, video {
  display: inline-block;
}

</style>
