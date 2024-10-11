<template>
  <section class="bg-black" id="section-start-trader">
    <div class="container mx-auto">
      <!-- head -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-black text-white rounded-xl">
        <!-- Sidebar -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
          <button
            class="flex items-center gap-2 px-2 py-2 rounded-full bg-white text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <!-- SVG content for globe icon -->
            </svg>
            <span class="font-medium">Global</span>
          </button>
          <button
            class="flex items-center gap-2 px-2 py-2 rounded-full bg-gradient-to-b from-[#333333] to-[#222222]"
          >
            <!-- <img src="path/to/india-flag.png" alt="India" class="w-6 h-6 rounded-full"> -->
            <span class="text-white">India</span>
          </button>
          <!-- Add similar buttons for other countries with appropriate flags -->
          <button
            class="flex items-center gap-2 px-2 py-2 rounded-full bg-gradient-to-b from-[#333333] to-[#222222]"
          >
            <!-- <img src="path/to/malaysia-flag.png" alt="Malaysia" class="w-6 h-6 rounded-full"> -->
            <span class="text-white">Malaysia</span>
          </button>
          <button
            class="flex items-center gap-2 px-2 py-2 rounded-full bg-gradient-to-b from-[#333333] to-[#222222]"
          >
            <!-- <img src="path/to/thailand-flag.png" alt="Thailand" class="w-6 h-6 rounded-full"> -->
            <span class="text-white">Thailand</span>
          </button>
          <!-- Continue for Laos, Vietnam, Bangladesh, etc. -->
        </div>

        <!-- Contact Information -->
        <div
          class="p-6 rounded-[2.5rem] bg-gradient-to-b from-[#333333] to-[#222222] text-gray-300 flex-1"
        >
          <header class="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <!-- SVG content for globe icon -->
            </svg>
            <div>
              <h2 class="text-xl font-semibold text-white">Global</h2>
              <p class="text-sm text-gray-400">English</p>
            </div>
          </header>
          <ul class="space-y-2">
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <!-- SVG content for phone icon -->
              </svg>
              <a href="tel:+44 330 027 1824" class="text-green-400"
                >+44 330 027 1824</a
              >
              <span class="ml-2 text-gray-400">โทรทางไกล</span>
            </li>
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <!-- SVG content for email icon -->
              </svg>
              <a href="mailto:support@markets4you.com" class="text-green-400"
                >support@markets4you.com</a
              >
            </li>
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <!-- SVG content for online call icon -->
              </svg>
              <a
                href="https://account.forex4you.com/en/site-call?_locale=en"
                class="text-green-400"
                >Call online</a
              >
            </li>
            <li class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <!-- SVG content for chat icon -->
              </svg>
              <a
                href="https://salesiq.zohopublic.eu/signaturesupport.ls?widgetcode=cee2aad4f3512f1969b66b2bbc212f6d6b156e9cc540779e83c36f1ffad797cf"
                class="text-green-400"
                >Start a chat</a
              >
            </li>
          </ul>
          <div class="mt-4">
            <p class="text-sm text-gray-400">
              ฝ่ายบริการลูกค้าให้บริการทุกวันตลอด 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
      <!-- footer-->
      <div class="grid grid-cols-1 text-center lg:grid-cols-2 gap-6 p-6 bg-black text-white">
        <!-- Card 1 -->
        <div class="p-16 rounded-[2.5rem] bg-gradient-to-b from-[#333333] to-[#222222]">
          <h3 class="text-xl font-semibold mb-2">ฝ่ายบริการพาร์ทเนอร์</h3>
          <p class="mb-4">
            หากต้องการความช่วยเหลือเกี่ยวกับโปรแกรมพาร์ทเนอร์ กรุณาติดต่อที่
            <a href="mailto:partners@markets4you.info" class="text-green-400">partners@markets4you.info</a><br>
            ทีมงานของเราจะตอบกลับภายใน 24 ชั่วโมง
          </p>
          <button class="px-4 py-2 rounded-full bg-white text-black font-medium">ส่งอีเมล</button>
        </div>

        <!-- Card 2 -->
        <div class="p-16 rounded-[2.5rem] text-center bg-gradient-to-b from-[#333333] to-[#222222]">
          <h3 class="text-xl font-semibold mb-2">ฝ่ายการตลาด</h3>
          <p class="mb-4">
            หากมีข้อสงสัยด้านการตลาด กรุณาติดต่อที่
            <a href="mailto:marketing@markets4you.info" class="text-green-400">marketing@markets4you.info</a><br>
            ทีมงานของเราจะตอบกลับภายใน 24 ชั่วโมง
          </p>
          <button class="px-4 py-2 rounded-full bg-white text-black font-medium">ส่งอีเมล</button>
        </div>

        <!-- Card 3 - Full width -->
        <div class="p-6 rounded-[2.5rem] bg-gradient-to-r text-center from-[#333333] to-[#222222] col-span-1 lg:col-span-2">
          <h3 class="text-xl font-semibold mb-2">มีแนวคิดหรือข้อเสนอแนะใช่หรือไม่</h3>
          <p class="mb-4">
            เรายินดีที่จะรับข้อเสนอแนะของคุณเกี่ยวกับการปรับปรุง Markets4you กรุณาติดต่อที่
            <a href="mailto:feedback@markets4you.info" class="text-green-400">feedback@markets4you.info</a>
          </p>
          <button class="px-4 py-2 rounded-full bg-white text-black font-medium">แชร์ความคิดเห็นของคุณ</button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import BglightImage from "~/assets/images/bg-light.png";
import footerImage from "~/assets/images/landing/footer-img.png";
</script>
