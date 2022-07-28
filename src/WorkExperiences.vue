<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';
import WorkExperience from '@/components/WorkExperience.vue';
import logo from '@/assets/logo.svg';

const workExperiences: WorkExperienceModel[] = [
  {
    icon: logo,
    title: 'Frontend Chapter Lead',
    company: 'Tapsell',
    start: { month: '1', year: '2000' },
    desc: 'lorem weflwej klfwjwel fwjlkewlfjekl wejfl ewfjlewk jwefkl ewjflkj welkfj welkf welkf jlw',
  },
  {
    icon: logo,
    title: 'Frontend Chapter Lead',
    company: 'Tapsell',
    start: { month: '1', year: '2000' },
    desc: 'lorem weflwej klfwjwel fwjlkewlfjekl wejfl ewfjlewk jwefkl ewjflkj welkfj welkf welkf jlw',
  },
];
</script>

<template>
  <h3 class="section-title">Experiences</h3>
  <WorkExperience v-for="w in workExperiences" :work="w" />
</template>

<style>
@import 'assets/base.scss';

body {
  background: #f9f9f9;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
