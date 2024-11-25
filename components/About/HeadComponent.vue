<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    <img
      :src="about"
      alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FABD02] to-[#FFF3C4] opacity-20" style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#FABD02] to-[#FFF3C4] opacity-20" style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        " />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          {{ $t("About.title") }}
        </h2>
        <p class="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          {{ $t("About.subtitle") }}
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
        <!-- Card 1 -->
        <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
          <PhoneIcon class="h-7 w-5 flex-none text-primary-400" aria-hidden="true" />
          <div class="text-base/7">
            <h3 class="font-semibold text-white">{{ $t("About.Support") }}</h3>
            <p class="mt-2 text-gray-300">
              {{ $t("About.SupportSub") }}
              <br>
              <a href="mailto:partner@myportcapital.com" class="text-primary-500 hover:text-primary-700">partner@myportcapital.com</a>
            </p>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
          <LifebuoyIcon class="h-7 w-5 flex-none text-primary-400" aria-hidden="true" />
          <div class="text-base/7">
            <h3 class="font-semibold text-white">{{ $t("About.Marketing") }}</h3>
            <p class="mt-2 text-gray-300">
              {{ $t("About.MarketingSub") }}
              <br>
              <a href="mailto:marketing@myportcapital.com" class="text-primary-500 hover:text-primary-700">marketing@myportcapital.com</a>
            </p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
          <NewspaperIcon class="h-7 w-5 flex-none text-primary-400" aria-hidden="true" />
          <div class="text-base/7">
            <h3 class="font-semibold text-white">{{ $t("About.TechnicalSupport") }}</h3>
            <p class="mt-2 text-gray-300">
              {{ $t("About.TechnicalSub") }}
              <br>
              <a href="mailto:support@myportcapital.com" class="text-primary-500 hover:text-primary-700">support@myportcapital.com</a>
            </p>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base/7 text-gray-300">{{ $t("About.Officesworldwide") }}</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">5</dd>
            </div>
            <!-- Stat 2 -->
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base/7 text-gray-300">{{ $t("About.Fulltimecolleagues") }}</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">300+</dd>
            </div>
            <!-- Stat 3 -->
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base/7 text-gray-300">{{ $t("About.Hoursperweek") }}</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">40</dd>
            </div>
            <!-- Stat 4 -->
            <div class="flex flex-col-reverse gap-1">
              <dt class="text-base/7 text-gray-300">+81 090 1789 6395</dt>
              <dd class="text-4xl font-semibold tracking-tight text-white">{{ $t("About.Contact") }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from "@heroicons/vue/20/solid";
import about from "~/assets/images/about.jpg";
import section1_1 from "~/assets/images/partners/01_mypartner.jpg";
import StartLandingComponent from "~/components/Landing/StartComponent.vue";
// import Notification from '~/components/Notification.vue'
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
const cards = [
  {
    name: "Sales",
    description:
      "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    description:
      "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    icon: LifebuoyIcon,
  },
  {
    name: "Media Inquiries",
    description:
      "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    icon: NewspaperIcon,
  },
];
</script>
