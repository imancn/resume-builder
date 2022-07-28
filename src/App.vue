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
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

.section-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
}
</style>
