<script setup lang="ts">
import Resume from '@/Resume.vue';
</script>

<template>
  <Resume />
</template>

<style lang="scss">
@import 'assets/base.scss';

#app {
  display: flex;
  padding: 1rem;
  background: #f9f9f9;
  @media print {
    padding: 0;
  }
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

</style>
