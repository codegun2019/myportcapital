<template>
  <div class="bg-black text-white">
    <!-- Navigation bar -->
    <nav class="flex justify-between items-center p-4">
      <!-- Logo and Hamburger menu icon for mobile -->
      <div class="flex items-center space-x-0 sm:space-x-6">
        <div class="h-8 hidden sm:block" >
          <NuxtLink @click="closeMobileMenu" to="/">
            <img :src="logo" alt="logo" class="h-8 w-12" />
          </NuxtLink>
        </div>

        <!-- Hamburger icon for mobile -->
        <button @click="toggleMobileMenu"  class="xl:hidden lg:hidden md:hidden sm:hidden block block-menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu items (hidden on mobile, shown on desktop) -->
        <div :class="{'hidden': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}" class="sm:flex sm:space-x-6 hidden block none-menu">
          <NuxtLink class="hidden lg:block" @click="closeMobileMenu" to="/">{{ $t("menu.home") }}</NuxtLink>
          <!-- <a href="#" class="hover:text-primary-400">{{ $t("menu.buy") }}</a>
          <a href="#" class="hover:text-primary-400">{{ $t("menu.platform") }}</a>
          <a href="#" class="hover:text-primary-400">{{ $t("menu.more") }}</a> -->
          <NuxtLink  @click="closeMobileMenu" to="market">{{ $t("menu.market") }}</NuxtLink>
          <NuxtLink  @click="closeMobileMenu" to="accounting">{{ $t("menu.accounting") }}</NuxtLink>
          <NuxtLink  @click="closeMobileMenu" to="deposit">{{ $t("menu.deposit") }}</NuxtLink>
          <NuxtLink  @click="closeMobileMenu" to="promotion">{{ $t("menu.promotion") }}</NuxtLink>
          <NuxtLink  @click="closeMobileMenu" to="platform">{{ $t("menu.platform") }}</NuxtLink>
          <NuxtLink  @click="closeMobileMenu" to="partners">{{ $t("menu.partners") }}</NuxtLink>
          <NuxtLink class="hidden lg:block"  @click="closeMobileMenu" to="about">{{ $t("menu.about") }}</NuxtLink>
        </div>
      </div>

      <!-- Language switcher and buttons (shown in both mobile and desktop) -->
      <div class="flex items-center space-x-4 ">
        <div class="relative">
          <!-- Language dropdown -->
          <button @click="toggleDropdown" class="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
            <img :src="currentFlag" alt="Selected Language" class="h-4 w-6" />
            <span class="pl-1"> {{ currentLanguage }}</span>
            <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="isDropdownOpen" class="z-40 absolute mt-2 bg-white text-black py-2 w-20 rounded-lg shadow-lg">
            <button @click="switchLanguage('en')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="enFlag" alt="EN" class="h-4 w-6" />
              <span class="pl-1"> EN</span>
            </button>
            <button @click="switchLanguage('th')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="thFlag" alt="TH" class="h-4 w-6" />
              <span class="pl-1"> TH</span>
            </button>
            <button @click="switchLanguage('lo')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="loFlag" alt="LO" class="h-4 w-6" />
              <span class="pl-1"> LA</span>
            </button>
            <button @click="switchLanguage('zh')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="zhFlag" alt="ZH" class="h-4 w-6" />
              <span class="pl-1"> CN</span>
            </button>
            <button @click="switchLanguage('jp')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="jpFlag" alt="JP" class="h-4 w-6" />
              <span class="pl-1"> JP</span>
            </button>
          </div>
        </div>

        <a href="https://client.myportcapital.com/registration"  class="px-4 py-2 bg-primary-500 hover:bg-primary-700 text-white rounded-lg ">{{ $t("buttons.open_account") }}</a>
        <a href="https://client.myportcapital.com/login" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg hidden lg:block">{{ $t("buttons.login") }}</a>
      </div>
    </nav>

    <!-- Fullscreen Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50"
    >
      <button @click="toggleMobileMenu" class="absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="grid grid-cols-2 gap-4 p-4">
        <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
          <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#F7C948] to-[#C69002] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
        </div>
        <div class="ring-1 text-white ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="/">{{ $t("menu.home") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="market" class="font-normal tracking-tight text-white">{{ $t("menu.market") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="accounting" class="font-normal tracking-tight text-white">{{ $t("menu.accounting") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="deposit" class="font-normal tracking-tight text-white">{{ $t("menu.deposit") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="promotion" class="font-normal tracking-tight text-white">{{ $t("menu.promotion") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="platform" class="font-normal tracking-tight text-white">{{ $t("menu.platform") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="partners" class="font-normal tracking-tight text-white">{{ $t("menu.partners") }}</NuxtLink>
        </div>
        <div class="ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-10 md:py-10 xl:gap-x-20 xl:px-20 p-4 rounded-lg hover:bg-primary-500">
          <NuxtLink  @click="closeMobileMenu" to="about" class="font-normal tracking-tight text-white">{{ $t("menu.about") }}</NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 p-4">
        <NuxtLink href="https://client.myportcapital.com/registration" class="px-24 py-5 w-100 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-center">{{ $t("buttons.open_account") }}</NuxtLink>
        <NuxtLink href="https://client.myportcapital.com/login" class="px-24 py-5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg text-center">{{ $t("buttons.login") }}</NuxtLink>
      </div>
      
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import thFlag from '~/assets/flags/th.svg'
import enFlag from '~/assets/flags/en.svg'
import loFlag from '~/assets/flags/lo.svg'
import zhFlag from '~/assets/flags/zh.svg'
import jpFlag from '~/assets/flags/jp.svg'
import logo from '~/assets/images/logo.png'




const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

const { locale } = useI18n()

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

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function switchLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("selectedLanguage", lang);
  isDropdownOpen.value = false;
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});

</script>

<style scoped>
@media screen and (min-device-width: 600px) and (max-device-width: 1280px) { 
  .none-menu{
    display: none;
  }
  .block-menu{
    display: block !important;
  }
}

</style>
