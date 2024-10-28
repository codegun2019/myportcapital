<template>
  <section id="section-trader" :style="{ backgroundImage: `url(${section6_1})`, backgroundSize: 'cover', backgroundPosition: 'left' }" class="bg-bottom 2xl:bg-contain bg-left bg-black min-h-screen bg-top text-white bg-[80%_0%] bg-no-repeat">
    <div class="container mx-auto px-[16px]">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <!-- Left content -->
        <div class="flex items-center justify-center min-h-screen pl-0 pt-[62px] lg:justify-start lg:pl-12 lg:pt-0">
          <div>
            <img :src="section6_2" alt="web" class="block md:hidden w-100 mb-2" />
            <h2 class="text-4xl lg:text-left xl:tex-teft text-center font-bold">
              {{ $t("Home.Trader_welcome_title") }}<span class="text-primary-500">{{ $t("Home.Trader_welcome_title_sub") }}</span>
            </h2>
            <h2 class="mt-[16px] text-center text-body-2 text-white sm:text-body-1 md:mt-0 lg:text-start lg:text-heading-6">
              {{ $t("Home.Trader_welcome_subttile") }}
            </h2>
            <p class="mt-3 text-center text-body-4 text-secondary-500 sm:text-body-3 lg:text-start lg:text-heading-body">
              {{ $t("Home.Trader_welcome_description") }}
            </p>
            <div class="flex justify-center lg:justify-start">
              <a href="">
                <button class="bg-transparent text-primary-500 hover:text-secondary-500 text-primary mt-[16px] flex items-center px-0 font-[500] text-primary">
                  {{ $t("Home.Trader_welcome_cta") }}&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </a>
            </div>
            <!-- Download buttons for MetaTrader -->
            <div class="mt-[50px]">
              <div class="mb-0 ms-0 hidden lg:block text-body-4 text-secondary sm:text-body-3 md:mb-[28px] lg:text-heading-body">{{ $t("Home.Trader_welcome_ctb") }}</div>
              <div class="flex max-w-[315px] flex-wrap items-center">
                <div class="basis-1/3 ">
                  <a target="_blank" href="">
                    <img :src="mt5Windows" alt="windows" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="">
                    <img :src="mt5Macos" alt="macos" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="">
                    <img :src="mt5Android" alt="android" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="">
                    <img :src="mt5Ios" alt="ios" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="">
                    <img :src="mt5Web" alt="web" class="w-100 mb-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right content: Image -->
        <div class="flex justify-center px-[30px] 2xl:px-[150px] xl:px-[150px] lg:px-[50px] py-[40px] lg:py-[128px]">
          <div>
            <div class="mt-[50px] block lg:hidden">
              <div class="mb-[16px] ms-0 text-center text-body-4 text-secondary sm:text-body-3 md:mb-[28px] lg:text-heading-body">
                {{ $t("Home.Trader_welcome_ctb") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import section6_1 from '~/assets/images/market/section6/01_Banner.jpg'
import section6_2 from '~/assets/images/landing/section6/02_Device.png'

import BglightImage from '~/assets/images/bg-light.png'
import mt5Windows from '~/assets/images/landing/icons/mt5-windows.svg'
import mt5Macos from '~/assets/images/landing/icons/mt5-macos.svg'
import mt5Android from '~/assets/images/landing/icons/mt5-android.svg'
import mt5Ios from '~/assets/images/landing/icons/mt5-ios.svg'
import mt5Web from '~/assets/images/landing/icons/mt5-web.svg'
import mt5Image from '~/assets/images/landing/mt5.png'
</script>
