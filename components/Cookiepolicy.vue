<template>
  <div
    v-if="show"
    class="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-lg p-6 max-w-sm w-full ring-1 ring-gray-900/10"
  >
    <!-- Close Button -->
    <button
      @click="$emit('close')"
      class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Content -->
    <h2 class="text-lg font-semibold text-gray-900">{{ $t("Cookiepolicy.title") }}</h2>
    <p class="mt-4 text-sm text-gray-700">
      {{ $t("Cookiepolicy.subtitle") }}
      <NuxtLink href="/Privacypolicy" class="text-primary-600 font-semibold hover:underline">{{ $t("Cookiepolicy.description") }}</NuxtLink>.
    </p>

    <!-- Actions -->
    <div class="mt-6 flex items-center gap-x-4">
      <button
        @click="$emit('close')"
        class="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-700"
      >
      {{ $t("Cookiepolicy.Accept") }}
      </button>
      <button
        @click="$emit('close')"
        class="text-gray-900 text-sm font-semibold hover:underline"
      >
      {{ $t("Cookiepolicy.Decline") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
/* Optional additional styles for modal */
</style>
