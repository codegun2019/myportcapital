<template>
  <div class="bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 min-h-screen flex items-center justify-center">
    <section class="text-white py-24" id="accounting-section">
      <div class="container mx-auto text-center">
        <!-- หัวข้อ -->
        <h1 class="text-4xl font-bold mb-4">
          {{ $t("Accounting.Header_welcome_title") }}<span class="text-primary-500">{{ $t("Accounting.Header_welcome_subttile") }}</span>
        </h1>

        <!-- คำอธิบาย -->
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          {{ $t("Accounting.Header_welcome_description") }} {{ $t("Accounting.Header_welcome_subdescription") }}
        </p>

        <!-- ปุ่ม CTA -->
        <NuxtLink
          to=""
          class="inline-block bg-primary-500 text-white py-3 px-6 rounded-full hover:bg-primary-800 transition-all"
        >
          {{ $t("Accounting.Header_welcome_cta") }}
        </NuxtLink>

      </div>
    </section>
  </div>
</template>

<script setup>
import Word1Image from '~/assets/flags/cfds.svg'
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
