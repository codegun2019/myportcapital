<template>
  <div>
    <!-- แทนที่ NuxtWelcome ด้วย Layout และ NuxtPage -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'myport : ช่วงเวลาของการเทรดที่มีค่าที่ให้มากกว่าการเทรด',
  ogTitle: 'myport : ช่วงเวลาของการเทรดที่มีค่าที่ให้มากกว่าการเทรด',
  description: 'myport .. myplan ช่วงเวลาของการเทรดที่มีค่าที่ให้มากกว่าการเทรด ออกแบบบัญชีของตัวเอง ด้วยการเลือกโปรโมชั่นที่ต้องการ ให้เหมาะกับสไตล์การเทรดของตัวเองได้ง่ายๆ เพียงคลิกเดียว.',
  ogDescription: 'myport .. myplan ช่วงเวลาของการเทรดที่มีค่าที่ให้มากกว่าการเทรด ออกแบบบัญชีของตัวเอง ด้วยการเลือกโปรโมชั่นที่ต้องการ ให้เหมาะกับสไตล์การเทรดของตัวเองได้ง่ายๆ เพียงคลิกเดียว.',
  ogImage: 'http://localhost:3000/_nuxt/assets/images/landing/section2/02_Device.png',
  twitterCard: 'http://localhost:3000/_nuxt/assets/images/landing/section2/02_Device.png',
})
</script>
