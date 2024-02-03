<script setup lang="ts">
import StackoverflowWidget from '@/components/StackoverflowWidget.vue';
import LinkedinRecoms from '@/components/LinkedinRecoms.vue';
import ReactContest from '@/components/ReactContest.vue';
import Languages from '@/components/Languages.vue';
</script>

<template>
  <div class="honors">
    <h2 class="section-title">Honors</h2>
    <StackoverflowWidget />
    <div class="mt-75">
      <ReactContest />
      <LinkedinRecoms />
      <Languages />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
