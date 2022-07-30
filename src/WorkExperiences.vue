<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';
import WorkExperience from '@/components/WorkExperience.vue';
import logo from '@/assets/logo.svg';
import TapsellLogo from '@/assets/tapsell.png';
import MetrixLogo from '@/assets/metrix.png';

const workExperiences: WorkExperienceModel[] = [
  {
    icon: TapsellLogo,
    title: 'Frontend Chapter Lead',
    company: 'Tapsell',
    start: { month: '7', year: '2019' },
    desc: `I joined Tapsell as a junior front-end developer and as the company was growing I managed to gain trust and create a front-end chapter (we were only 2 front-end developers at the time) later by growing my team I had a huge impact on the quality of work in front-end teams of Tapsell.

My main responsibilities:
- Lead a team of 15+ frontend developers in multiple products
- Do interviews for future candidates
- Maintain multiple monorepo frontend (React, Angular & VanillaJS) projects
- Main developer of an internal full-featured Angular library for Tapsell design system (Peste UI)

Our front-end developers were working in separate teams without any interactions. By conducting weekly knowledge-sharing meetings and cross-team code review sessions, I was able to create a connected and targeted team. Besides, by creating a shared mono-repo library not only did we skip a lot of repeated work, but also we had more interactions as we were all working on the same project.`,
    country: 'iran',
    type: 'full time',
  },
  {
    icon: logo,
    title: 'Flutter Developer',
    company: 'Teetap',
    start: { month: '2', year: '2020' },
    end: { month: '9', year: '2021' },
    desc: 'Teetap is a small remote team of flutter game developers.',
    country: 'Canada',
    type: 'freelance',
  },
  {
    icon: logo,
    title: 'Frontend Team Lead',
    company: 'Klassroom',
    start: { month: '6', year: '2020' },
    end: { month: '12', year: '2020' },
    desc: 'Teetap is a small remote team of flutter game developers.',
    country: 'Canada',
    type: 'contract',
  },
  {
    icon: MetrixLogo,
    title: 'Senior Frontend Engineer',
    company: 'Metrix',
    start: { month: '6', year: '2018' },
    end: { month: '12', year: '2019' },
    desc: `- Design UI and Develop two advanced analytical Angular panels single-handedly
- Develop an SSG documentation platform with Jekyll + Gulp
- Mentor two front-end interns`,
    country: 'Iran',
    type: 'contract',
  },
];
</script>

<template>
  <h3 class="section-title">Experiences</h3>
  <WorkExperience v-for="w in workExperiences" :work="w" />
</template>

<!--<style scoped lang="scss"></style>-->
