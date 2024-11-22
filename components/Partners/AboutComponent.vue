<template>
  <div class="bg-black" >
    <section class="page-header bg-gradient-to-r py-12">
      <div class="bg-black text-white py-10">
        <div class="container mx-auto">
          <!-- Grid layout with 2 columns on larger screens -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 partner-programs px-5">
            <!-- Card 1 -->
            <div class="partner-gradient partner-item bg-gradient-to-r from-zinc-900 to-zinc-700 p-6">
              <div class="grid grid-cols-3 gap-4 py-2">
                <div class="col-start-1 col-end-3 flex items-center">
                  <p class="text-lg font-semibold text-left">
                    {{ $t("Partners.Header_row_description_1") }}
                  </p>
                </div>
                <div class="col-end-7 col-span-2 text-white">
                  <img :src="partner_1" alt="Partner 1">
                </div>
              </div>
            </div>
            <!-- Card 2 -->
            <div class="partner-gradient partner-item bg-gradient-to-r from-zinc-900 to-zinc-700 p-6">
              <div class="grid grid-cols-3 gap-4 py-2">
                <div class="col-start-1 col-end-3 flex items-center">
                  <p class="text-lg font-semibold text-left">
                    {{ $t("Partners.Header_row_description_2") }}
                  </p>
                </div>
                <div class="col-end-7 col-span-2 text-white">
                  <img :src="partner_2" alt="Partner 2">
                </div>
              </div>
            </div>
            <!-- Card 3 -->
            <div class="partner-gradient partner-item bg-gradient-to-r from-zinc-900 to-zinc-700 p-6">
              <div class="grid grid-cols-3 gap-4 py-2">
                <div class="col-start-1 col-end-3 flex items-center">
                  <p class="text-lg font-semibold text-left">
                    {{ $t("Partners.Header_row_description_3") }}
                  </p>
                </div>
                <div class="col-end-7 col-span-2 text-white">
                  <img :src="partner_3" alt="Partner 3">
                </div>
              </div>
            </div>
            <!-- Card 4 -->
            <div class="partner-gradient partner-item bg-gradient-to-r from-zinc-900 to-zinc-700 p-6">
              <div class="grid grid-cols-3 gap-4 py-2">
                <div class="col-start-1 col-end-3 flex items-center">
                  <p class="text-lg font-semibold text-left">
                    {{ $t("Partners.Header_row_description_4") }}
                  </p>
                </div>
                <div class="col-end-7 col-span-2 text-white">
                  <img :src="partner_4" alt="Partner 4">
                </div>
              </div>
            </div>
          </div>
          <!-- Caption -->
          <p class="text-center text-sm text-gray-400 mt-6">
            *
            {{ $t("Partners.Header_row_description") }}
          </p>
        </div>
      </div>
      <div class="min-h-screen bg-cover bg-no-repeat items-center justify-center"
          :style="{
            backgroundImage: `url(${section_bg})`,
          }">
        <div class="container mx-auto text-center md:pt-[100px] pt-5 pb-5 md:pb-[55px]">
          <h2 class="text-4xl font-bold text-white">
            {{ $t("Partners.Header_about_title") }} my<span class="text-primary-400">{{ $t("Partners.Header_about_subttile") }}</span>
          </h2>
          <p class="page-header-description text-lg mb-6 text-secondary-500">
            {{ $t("Partners.Header_about_description") }}
          </p>
        </div>
        <div class="m-3">
          <article class="bg-gradient-to-b from-[#333333] to-[#222222] rounded-lg p-6 max-w-lg mx-auto">
          <!-- Partner program subheading and description -->
          <hgroup class="mb-4">
            <h3 class="text-2xl font-bold text-white mb-2">{{ $t("BrokerReferral.title") }}</h3>
            <p class="text-sm text-secondary-500">
              {{ $t("BrokerReferral.description") }}
            </p>
          </hgroup>

          <!-- List of partner program properties -->
          <ul class="mb-4 space-y-2 text-white">
            <li class="flex items-start text-sm">
              <span class="text-primary-400">✦</span>
              <span class="ml-2">
                {{ $t("BrokerReferral.spread_share") }} <strong>$14.4</strong>
              </span>
            </li>
            <li class="flex items-start text-sm">
              <span class="text-primary-400">✦</span>
              <span class="ml-2">
                {{ $t("BrokerReferral.loyalty_bonus") }} <strong>$7.5</strong>
              </span>
            </li>
            <li class="flex items-start text-sm">
              <span class="text-primary-400">✦</span>
              <span class="ml-2">
                {{ $t("BrokerReferral.monthly_commission") }} <strong>20%</strong>
              </span>
            </li>
          </ul>

          <!-- Link to partner program page -->
          <NuxtLink
            class="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold"
          >
          {{ $t("LearnMore.cta") }}
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </article>
        </div>
      </div>
    <div class="bg-cover md:bg-contain  bg-no-repeat" :style="{backgroundImage: `url(${mypartner})`,}">
      <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
        <h2 class="text-4xl font-bold text-white">
          {{ $t("MyPartners.start_title") }} my<span class="text-primary-400">partner {{ $t("MyPartners.start_title_2") }}</span>
        </h2>
        <p class="page-header-description text-lg mb-6 text-secondary-500">
          {{ $t("MyPartners.welcome_description") }} <br />
          {{ $t("MyPartners.opportunity_description") }}<br />
          {{ $t("MyPartners.celebrate_success") }}<br />
        </p>
      </div>

      <div class="text-white py-12">
        <!-- Header Section -->
        <div class="flex justify-center items-center space-x-4 px-6 md:px-20">
          <div class="flex -space-x-2">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="Partner 1">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="Partner 2">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" alt="Partner 3">
          </div>
          <div class="text-xl md:text-2xl font-bold">
            {{ $t("FooterPartner.join_title") }}{{ $t("FooterPartner.join_subtitle") }} 102,000 {{ $t("FooterPartner.cta") }}
          </div>
        </div>


        <!-- Steps Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6 md:px-20 mt-10">
          <!-- Step 1 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">01</h1>
            <h2 class="text-2xl font-bold mt-4">{{ $t("FooterPartner.register") }}</h2>
            <p class="text-gray-300 mt-2">{{ $t("FooterPartner.description") }}</p>
          </div>
          <!-- Step 2 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">02</h1>
            <h2 class="text-2xl font-bold mt-4">{{ $t("FooterPartner.share_link") }}</h2>
            <p class="text-gray-300 mt-2">{{ $t("FooterPartner.share_link") }}</p>
          </div>
          <!-- Step 3 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">03</h1>
            <h2 class="text-2xl font-bold mt-4">{{ $t("FooterPartner.earn_more") }}</h2>
            <p class="text-gray-300 mt-2">{{ $t("FooterPartner.earn_description") }}</p>
          </div>
        </div>

        <!-- Call to Action Button -->
        <div class="flex justify-center mt-12">
          <NuxtLink to="/">
            <button
              class="group flex mx-auto items-center justify-center font-bold py-[12px] pr-[2px] pl-[16px] bg-white border border-transparent rounded-full hover:bg-primary-600 hover:text-white text-black max-h-[44px] whitespace-nowrap space-x-2 shadow-lg"
            >
              <span>{{ $t("Partners.Header_welcome_cta") }}</span>
              <!-- Icon with green background and hover effect -->
              <div class="text-white bg-primary-500 rounded-full p-2 flex items-center justify-center group-hover:bg-white group-hover:text-primary-500 transition-colors duration-300">
                <ArrowIcon class="w-4 h-4" />
              </div>
            </button>
          </NuxtLink>
        </div>
        <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
          <h2 class="text-4xl font-bold text-white">
            {{ $t("FooterPartner.feedback_from") }} my<span class="text-primary-400">partner</span>
          </h2>
          <p class="page-header-description text-lg mb-6 text-secondary-500">
            {{ $t("FooterPartner.growth_title") }} <br />
            {{ $t("FooterPartner.growth_description") }}<br />
          </p>
        </div>
      </div>
      <!-- comment card -->
      <div class="bg-black py-10">
        <div class="container p-5 mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          <!-- Testimonial 1 -->
          <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=1" alt="User 1">
              <div class="ml-3">
                <p class="text-sm font-bold">ธนกร ดาการวด</p>
                <p class="text-xs text-gray-400">เป็นพันธมิตรมา 6 ปี</p>
              </div>
            </div>
            <p class="text-sm">
              เดินได้อย่างรวดเร็วในช่วงไม่กี่ปีที่ผ่านมา ตอนนี้ทำเว็บที่ทันสมัยและใช้งานง่าย ทำให้การทำงานกับ Markets4you ราบรื่นมาก”
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=2" alt="User 2">
              <div class="ml-3">
                <p class="text-sm font-bold">เมลวิน ตัน</p>
                <p class="text-xs text-gray-400">เป็นพันธมิตรมา 3 ปี</p>
              </div>
            </div>
            <p class="text-sm">
              “ผมทำงานกับ Markets4you และได้รับค่าคอมมิชชันจำนวนมาก สอนผมสร้างความมั่นใจในการทำงานจริง ๆ”
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=3" alt="User 3">
              <div class="ml-3">
                <p class="text-sm font-bold">วิลเลียน ตัน</p>
                <p class="text-xs text-gray-400">เป็นพันธมิตรมา 2 ปี</p>
              </div>
            </div>
            <p class="text-sm">
              “การร่วมงานกับ Markets4you มากกว่า 2 ปีทำให้เห็นความมั่นคงและบริการที่เยี่ยมยอด”
            </p>
          </div>

          <!-- Testimonial 4 -->
          <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=4" alt="User 4">
              <div class="ml-3">
                <p class="text-sm font-bold">ปราวิน คุตะ</p>
                <p class="text-xs text-gray-400">เป็นพันธมิตรมา 3 ปี</p>
              </div>
            </div>
            <p class="text-sm">
              “สถานการณ์ของ Markets4you ได้พัฒนาขึ้นเรื่อย ๆ พร้อมโอกาสในการสร้างรายได้ให้กับพาร์ทเนอร์”
            </p>
          </div>

          <!-- Testimonial 5 -->
          <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
              <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=5" alt="User 5">
              <div class="ml-3">
                <p class="text-sm font-bold">ไมเคิล วิเซนต์</p>
                <p class="text-xs text-gray-400">เป็นพันธมิตรมา 4 ปี</p>
              </div>
            </div>
            <p class="text-sm">
              “ตลอดเวลาที่ทำงานกับ Markets4you ผมได้รับประสบการณ์ที่ยอดเยี่ยมมาก ๆ”
            </p>
          </div>
        </div>
      </div>
    </div>


    </section>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from "~/components/composables/ArrowIcon.vue"; // Assuming you have an ArrowIcon component
import section_bg from '~/assets/images/partners/02_banckground.jpg'
import mypartner from '~/assets/images/partners/01_mypartner.jpg'

import partner_1 from '~/assets/images/partners/partner_1.svg'; // Assuming you have an ArrowIcon component
import partner_2 from '~/assets/images/partners/partner_2.svg'; // Assuming you have an ArrowIcon component
import partner_3 from '~/assets/images/partners/partner_3.svg'; // Assuming you have an ArrowIcon component
import partner_4 from '~/assets/images/partners/partner_4.svg'; // Assuming you have an ArrowIcon component
</script>

<style scoped>
.partner-programs .special-card {
  padding-bottom: 100px;
  background: linear-gradient(135deg, #111827, #1f2937);
  background-blend-mode: multiply;
}

.partner-programs .partner-item {
  background-blend-mode: multiply;
}
.partner-gradient{
  border-width: 1px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    rgba(250, 190, 18, 0.4),
    rgba(250, 190, 18, 0)
  );
}
</style>
