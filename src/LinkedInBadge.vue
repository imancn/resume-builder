<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  if (!document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
});
</script>

<template>
  <div class="linkedin-badge-wrapper">
    <div
      class="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="medium"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="imansoltani"
      data-version="v1"
    >
    </div>
  </div>
</template>

<style scoped>
.linkedin-badge-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

@media print {
  .linkedin-badge-wrapper {
    display: none !important;
  }
}
</style>