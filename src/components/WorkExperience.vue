<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';

defineProps<{
  work: WorkExperienceModel;
}>();
</script>

<template>
  <div class="work-experience">
    <work.icon />
    <h3>{{ work.title }}</h3>
  </div>
</template>

<style scoped></style>
