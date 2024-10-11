<template>
  <div>
    <ThePreloader />
    <NavbarComponent />
    <NuxtPage />
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import NavbarComponent from '~/components/Layouts/NavbarComponent.vue'
import FooterComponent from '~/components/Layouts/FooterComponent.vue'
</script>
