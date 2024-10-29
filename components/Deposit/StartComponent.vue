<template>
  <section class="bg-[#0b090a]" id="section-start-trader">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Right content section -->
      <div class="flex items-center px-[16px] pb-[62px] pt-[16px] md:pb-0 md:pt-[0]">
        <div class="px-5 py-20">
          <div>
            <h3 data-aos="fade-up" data-aos-duration="1000" class="text-4xl font-bold mb-4 text-center md:text-left">
              <span class="text-white">{{ $t("Accounting.Footer_welcome_title") }}</span>
              <!-- <span class="text-primary-500">port</span>
              <span class="text-white">ได้แล้ววันนี้</span> -->
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" class="mt-2 text-center text-secondary-400 md:text-start lg:text-body-3">
              {{ $t("Accounting.Footer_welcome_description") }}
            </p>
          </div>
          <div class="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a href="">
              <button data-aos="fade-up" data-aos-duration="1000"
                class="py-[10px] px-[16px] bg-primary-500 text-primary-900 rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
              >
                {{ $t("buttons.Trade_with") }} 0.0 pips
              </button>
            </a>
            <a href="">
              <button data-aos="fade-up" data-aos-duration="5555"
                class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
              >
                {{ $t("buttons.Demo_account") }}
              </button>
            </a>
          </div>
        </div>
      </div>
      <!-- Left image section -->
        <div class="">
          <img :src="section3_1" class="w-100" alt="img-footer" />
        </div>
    </div>
  </section>
</template>

<script setup>
import section3_1 from '~/assets/images/deposit/section3/01_Device.jpg'

</script>
