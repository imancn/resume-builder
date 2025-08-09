<script setup lang="ts">
import ReactLogo from '@/assets/react-logo.png';
</script>

<template>
  <a class="react-contest" href="https://quera.org/contest/assignments/9925/scoreboard/">
    <img :src="ReactLogo" alt="React Logo" class="react-logo" width="30px" height="30px" />
    <div>3rd in React contest among 200 participants</div>
    <div class="outside-link-icon"><span class="material-symbols-outlined">open_in_new</span></div>
  </a>
</template>

<style scoped>
.react-contest {
  display: flex;
  align-items: center;
  color: #0a66c2;
  background: hsl(194 60% 93%);
  border-radius: 4px;
  padding: 0 0.5rem 0 0;
  margin-bottom: 0.25rem;
}
.react-logo {
  width: 30px;
  height: 30px;
  background: hsl(194, 57%, 87%);
  color: #0a66c2;
  border-radius: 4px 0 0 4px;
  padding: 0.25rem;
  margin-inline-end: 0.75rem;
}
.outside-link-icon {
  margin-inline-start: auto;
  opacity: 0.6;
  display: flex;
  align-items: center;
  > .material-symbols-outlined {
    font-size: 20px;
  }
}
</style>
