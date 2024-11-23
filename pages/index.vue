<template>
  <div>
    <!-- Privacy Policy Modal -->
    <PrivacyPolicyModal
      :show="showPrivacyModal"
      @close="closeModal"
    />
    <!-- Other Components -->
    <HeaderComponent />
    <MyportComponent />
    <ReadyComponent />
    <WordComponent />
    <BuysellComponent />
    <PaymentComponent />
    <TraderComponent />
    <StartComponent />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal.vue';
import HeaderComponent from '~/components/Landing/HeaderComponent.vue';
import MyportComponent from '~/components/Landing/MyportComponent.vue';
import ReadyComponent from '~/components/Landing/ReadyComponent.vue';
import WordComponent from '~/components/Landing/WordComponent.vue';
import BuysellComponent from '~/components/Landing/BuysellComponent.vue';
import PaymentComponent from '~/components/Landing/PaymentComponent.vue';
import TraderComponent from '~/components/Landing/TraderComponent.vue';
import StartComponent from '~/components/Landing/StartComponent.vue';

const showPrivacyModal = ref(false);

// Method to close the modal
const closeModal = () => {
  showPrivacyModal.value = false; // Hide the modal
};
// Show modal only on first visit
onMounted(() => {
  if (!localStorage.getItem('privacyPolicyShown')) {
    showPrivacyModal.value = true;
    localStorage.setItem('privacyPolicyShown', 'true');
  }
});


</script>

<style scoped>
</style>
