<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Hero section -->
    <div :style="{ backgroundImage: `url(${cover})` }" class="text-center pt-[200px] px-5 bg-center bg-no-repeat bg-cover h-screen">
      <h1 class="text-4xl font-bold">{{ $t("hero.title") }}</h1>
      <h2 class="text-3xl text-primary-500 mt-4">{{ $t("hero.subtitle") }}</h2>
      <p class="text-lg mt-6 max-w-2xl mx-auto text-secondary-500">{{ $t("hero.description") }}</p>
      <button class="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg">
        {{ $t("hero.cta") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import cover from '~/assets/images/cover-landing.png'

const isDropdownOpen = ref(false)
const { locale } = useI18n()

// ฟังก์ชันเพื่อกำหนดธงตามภาษาที่เลือก
const currentFlag = computed(() => {
  switch (locale.value) {
    case 'th':
      return thFlag
    case 'en':
      return enFlag
    case 'lo':
      return loFlag
    case 'zh':
      return zhFlag
    case 'jp':
      return jpFlag
    default:
      return enFlag
  }
})

// แสดงชื่อภาษาปัจจุบัน
const currentLanguage = computed(() => {
  switch (locale.value) {
    case 'th':
      return 'TH'
    case 'en':
      return 'EN'
    case 'lo':
      return 'LA'
    case 'zh':
      return 'CN'
    case 'jp':
      return 'JP'
    default:
      return 'EN'
  }
})


function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function switchLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("selectedLanguage", lang); // บันทึกค่าภาษาใน localStorage
  isDropdownOpen.value = false;
}

// อ่านค่าภาษาเก่าจาก localStorage เมื่อตอนโหลดหน้าเว็บ
onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});
</script>

<style scoped>
/* Custom styles for the hero section if needed */
</style>
