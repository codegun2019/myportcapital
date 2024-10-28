<template>
  <div class="relative left-[96%] md:left-[13%] z-20">
    <!-- App Store Review Widget -->
    <div class="absolute top-[30%] xl:top-[30%] xl:right-[60%] right-[50%] w-[195px]">
      <div
        class="bg-card-good-w rounded-xl py-5 px-5 text-center border border-whire flex flex-col justify-between"
        data-elfsight-app-lazy="true"
      >
        <div class="BadgeContainer__Inner-sc-1s0biz7-0 fIIdbr es-badge-container">
          <!-- Container for centering image -->
          <div class="flex justify-center items-center">
            <div class="w-[60px]">
              <img :src="StroreImage3" alt="my port app android" class="h-auto mx-auto" />
            </div>
          </div>
          <div class="Rating__Container-sc-bk54oq-0 izQGGt es-rating-container mt-2">
            <div class="text-center">
              <div class="text-md  text-secondary-900">Myport</div>
            </div>
          </div>
          <div class="text-xs underline text-secondary-900">อ่าน 3,800 รีวิว</div>
        <div class="Rating__Container-sc-bk54oq-0 izQGGt es-rating-container text-center">
            <div class="flex">
              <Star size="20px" />
              <Star size="20px" />
              <Star size="20px" />
              <Star size="20px" />
              <Star size="20px" />
              <div class="text-xs mr-1 mt-1 ml-2 text-secondary-900">5 ดาว</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "~/components/composables/Star.vue";
import StroreImage from "~/assets/images/platforms/ios-store.svg";
import StroreImage3 from '~/assets/images/platforms/section3/05_Logo_App.svg'
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IUX App Trade | แอปพลิเคชันการเทรดที่ครบครันน่าเชื่อถือ",
  url: "https://www.iux.com/th/platforms/apptrade",
  brand: {
    "@type": "Brand",
    name: "IUX App Trade | แอปพลิเคชันการเทรดที่ครบครันน่าเชื่อถือ",
  },
  description:
    "ซื้อขายได้ทุกที่ด้วยแอปมือถือที่ใช้งานง่ายของ IUX ปรับแต่งได้สะดวกและรวดเร็ว มอบประสบการณ์การเทรดที่ดีที่สุดสำหรับคุณ",
  image: ["https://www.iux.com/assets/images/metatags/metatags.png"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.8,
    reviewCount: 3800,
    bestRating: 5,
    worstRating: 1,
  },
  review: {
    "@type": "Review",
    reviewBody: "ข่าวมาที่ไรหลุดจากMT5ตลอด รีโหลดตลอด ปรับปรุงอีกนิด",
    datePublished: "2024-09-19",
    author: {
      "@type": "Person",
      name: "Bkkzxc",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
    },
  },
};
</script>

<style scoped>
/* Add any custom styling as needed */
</style>
