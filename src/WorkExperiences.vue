<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';
import WorkExperience from '@/components/WorkExperience.vue';
import { WORK_EXPERIENCES } from '@/resume-data';

const workExperiences: WorkExperienceModel[] = WORK_EXPERIENCES;
</script>

<template>
  <h3 class="section-title">Experiences</h3>
  <WorkExperience
    v-for="w in workExperiences"
    :work="w"
    v-bind:key="w.company"
    v-bind:class="w.hideInResume ? 'print-hide' : ''"
  />
</template>

<!--<style scoped lang="scss"></style>-->
