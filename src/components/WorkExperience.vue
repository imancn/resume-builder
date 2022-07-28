<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';

defineProps<{
  work: WorkExperienceModel;
}>();
</script>

<template>
  <div class="work-experience">
    <div class="company-icon"><img :src="work.icon" width="40" height="40" /></div>
    <span class="company">{{ work.company }}</span>
    <div class="time"><span>2 years</span></div>
    <h3 class="job-title">{{ work.title }}</h3>
    <p class="job-desc">{{ work.desc }}</p>
  </div>
</template>

<style scoped lang="scss">
.work-experience {
  display: grid;
  grid-template-areas: 'icon title time' 'icon company time' 'empty desc desc';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
}
.company-icon {
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 0.5rem;
  > img {
    max-width: 100%;
  }
}
.time {
  grid-area: time;
  display: flex;
  align-items: center;
}
.company {
  grid-area: company;
}
.job-title {
  grid-area: title;
}
.job-desc {
  grid-area: desc;
}
</style>
