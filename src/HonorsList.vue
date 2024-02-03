<script setup lang="ts">
import StackoverflowWidget from '@/components/StackoverflowWidget.vue';
import LinkedinRecoms from '@/components/LinkedinRecoms.vue';
import ReactContest from '@/components/ReactContest.vue';
</script>

<template>
  <div class="honors">
    <h3 class="section-title">Honors</h3>
    <StackoverflowWidget />
    <div class="mt-75">
      <ReactContest />
      <LinkedinRecoms />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
