<template>
  <!-- <div class="p-4 rounded-lg" style="border-width: 4px; border-image-slice: 1; border-image-source: linear-gradient(to right, rgba(250, 190, 18, 0.4), rgba(250, 190, 18, 0));">
    Border with Linear Gradient
  </div> -->

  <div
    class="bg-black min-h-screen bg-cover bg-no-repeat flex items-center justify-center"
    :style="{
      backgroundImage: `url(${section_bg})`,
    }"
  >
    <section class="page-header bg-gradient-to-r py-12">
      <div class="container mx-auto text-center flex flex-col items-center justify-center">
        <h2 class="text-4xl font-bold text-white mb-4 motion-preset-slide-left-sm motion-delay-[800ms]">
          {{ $t("Partners.Header_welcome_title") }} my<span class="text-primary-400">{{ $t("Partners.Header_welcome_subttile") }}</span>
        </h2>
        <p class="page-header-description text-lg mb-6 text-secondary-500 motion-preset-blur-left block motion-delay-[1200ms]">
          {{ $t("Partners.Header_welcome_description") }}
        </p>

        <!-- Center the button with flex and adjust the icon to the right side -->
        <NuxtLink to="/">
          <button
            class="motion-preset-fade-lg  motion-delay-2000 group flex items-center justify-center font-bold py-[12px] pr-[2px] pl-[16px] bg-white border border-transparent rounded-full hover:bg-primary-600 text-black max-h-[44px] whitespace-nowrap space-x-2 shadow-lg"
          >
            <span>{{ $t("Partners.Header_welcome_cta") }}</span>
            <!-- Icon with green background and hover effect -->
            <div
              class="text-white bg-primary-500 rounded-full p-2 flex items-center justify-center group-hover:bg-white group-hover:text-primary-500 transition-colors duration-300"
            >
              <ArrowIcon class="w-4 h-4" />
            </div>
          </button>
        </NuxtLink>

        <div class="page-header-paid-out text-center mt-8 text-white">
          <div class="paid-out-text text-xl font-semibold motion-preset-blur-left block motion-delay-[1400ms]">
            {{ $t("Partners.Header_welcome_cta_title") }}
          </div>
          <div class="paid-out-number text-4xl font-bold mt-2 motion-preset-blur-left block motion-delay-[1800ms]">
            {{ $t("Partners.Header_welcome_cta_description") }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import section_bg from '~/assets/images/partners/01_banckground.jpg'
import ArrowIcon from '~/components/composables/ArrowIcon.vue' // Assuming you have an ArrowIcon component
</script>

<style scoped>
.border-dark-400 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

.bg-dark-500 {
  background-color: #121212;
}
</style>
