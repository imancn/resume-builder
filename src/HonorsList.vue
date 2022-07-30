<script setup lang="ts">
import StackoverflowWidget from '@/components/StackoverflowWidget.vue';
import LinkedinRecoms from '@/components/LinkedinRecoms.vue';
</script>

<template>
  <div class="honors">
    <h3 class="section-title">Honors</h3>
    <StackoverflowWidget />
    <div class="mt-4">
      <LinkedinRecoms />
    </div>
  </div>
</template>

<style scoped lang="scss">
.honors {
  margin-top: 1.5rem;
}
</style>
