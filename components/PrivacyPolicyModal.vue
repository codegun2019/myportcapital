<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-dark-700 bg-opacity-50 backdrop-blur-xl flex items-center justify-center z-50"
  >
    <div class="bg-white motion-duration-750 shadow-[0px_0px_1px_0px_inset] shadow-white/40 motion-ease-spring-bouncier motion-scale-in-[20%] motion-translate-y-in-15 w-11/12 max-w-lg p-6 shadow-lg">
      <!-- Header -->
      <div class="flex justify-between items-center border-b pb-4">
        <h3 class="text-lg font-semibold text-gray-800">คุกกี้</h3>
      </div>

      <!-- Content -->
      <div class="mt-4">
        <p class="text-gray-600">
          เว็บไซต์ของธนาคารมีการจัดเก็บข้อมูลจากเบราว์เซอร์ของคุณในรูปแบบคุกกี้ เพื่อมอบประสบการณ์การใช้งานที่ดียิ่งขึ้นให้แก่คุณ
          รวมถึงนำเสนอเนื้อหา และประชาสัมพันธ์สิทธิประโยชน์ที่ตรงกับความต้องการ การกดปุ่ม
          <span class="font-semibold">“ตกลงทั้งหมด”</span> จะช่วยให้คุณได้รับประสบการณ์เต็มรูปแบบในการใช้งานเว็บไซต์ของธนาคาร
          ทั้งนี้ คุณสามารถกำหนดการตั้งค่าคุกกี้แต่ละประเภทได้ตามที่คุณต้องการโดยกดปุ่ม
          <span class="font-semibold">“ตั้งค่าคุกกี้”</span> โดยคุณสามารถคลิกดูรายละเอียดเพิ่มเติมได้ที่ 
          <a href="#" class="text-primary-600 underline">ประกาศการใช้งานคุกกี้</a>.
        </p>
        <!-- <ul class="list-disc pl-6 mt-4 text-gray-600">
          <li>ข้อมูลที่เก็บรวบรวม</li>
          <li>วัตถุประสงค์การใช้งาน</li>
          <li>สิทธิของคุณ</li>
        </ul> -->
      </div>

      <!-- Footer -->
      <div class="mt-6 flex justify-end gap-4">
        <button
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          @click="setCookieSettings"
        >
          ปิดการตั้งค่าคุกกี้
        </button>
        <button
          class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          @click="closeModal"
        >
          ตกลงทั้งหมด
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Props
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

// Emits
const emit = defineEmits(['close']);

// Methods
const closeModal = () => {
  emit('close'); // Notify parent to close the modal
};

const setCookieSettings = () => {
  emit('settings'); // Emit event for opening cookie settings
};
</script>

<style scoped>
.text-primary-600 {
  color: #ff9900; /* Customize this to match your design */
}
</style>
