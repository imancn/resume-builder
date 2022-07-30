<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';

const props = defineProps<{
  work: WorkExperienceModel;
}>();

function getDateRangeLength() {
  const endYear = props.work.end && parseInt(props.work.end.year, 10);
  const startYear = parseInt(props.work.start.year, 10);
  const endMonth = props.work.end && parseInt(props.work.end.month, 10);
  const startMonth = parseInt(props.work.start.month, 10);
  const nowDate = new Date();

  const years: number = endYear ? endYear - startYear : nowDate.getFullYear() - startYear;
  const months = endMonth ? endMonth - startMonth : nowDate.getMonth() + 1 - startMonth;

  return years === 0
    ? `${months} Months`
    : `${years}${months >= 6 ? '.5+' : months > 0 ? '+' : ''} Years`;
}
</script>

<template>
  <div class="work-experience">
    <div class="company-icon"><img :src="work.icon" width="40" height="40" /></div>
    <div class="company">
      <span class="company-name">{{ work.company }}</span>
      - <span class="job-type">{{ work.type }}</span>
    </div>

    <div class="time">
      <span>{{ getDateRangeLength() }}</span>
    </div>
    <h3 class="job-title">{{ work.title }}</h3>
    <p class="job-desc">{{ work.desc }}</p>
  </div>
</template>

<style scoped lang="scss">
.work-experience {
  display: grid;
  grid-template-areas: 'icon title time' 'icon company time' 'empty desc desc';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: auto 1fr auto;
  margin-bottom: 1rem;
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
  text-transform: capitalize;
}
.company {
  grid-area: company;
  text-transform: capitalize;
}
.company-name {
  //font-weight: bold;
  //color: var(--text-3);
}
.job-type {
  color: var(--text-3);
}
.job-title {
  grid-area: title;
  line-height: 22px;
}
.job-desc {
  grid-area: desc;
  white-space: pre-wrap;
  margin-top: 0.25rem;
}
</style>
