<script setup lang="ts">
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
</script>

<template>
  <a
    class="linkedin-recoms"
    href="https://www.linkedin.com/in/vahidmohammadi/details/recommendations/"
  >
    <div class="linkedin-icon">
      <IconLinkedin :is-colored="true" />
    </div>
    <div class="linkedin-recom-text">LinkedIn Recommendations</div>
    <div class="outside-link-icon"><span class="material-symbols-outlined">open_in_new</span></div>
  </a>
</template>

<style scoped lang="scss">
.linkedin-recoms {
  display: flex;
  align-items: center;
  color: #0a66c2;
  background: #f0f8ff;
  border-radius: 4px;
  padding: 0 0.5rem 0 0;

  &:hover {
    opacity: 0.9;
  }
}
.linkedin-recom-text {
  margin-inline-end: 0.25rem;
}
.linkedin-icon {
  width: 30px;
  height: 30px;
  background: #dae8f5;
  color: #0a66c2;
  border-radius: 4px 0 0 4px;

  padding: 0.25rem 0.5rem 0.5rem;
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
