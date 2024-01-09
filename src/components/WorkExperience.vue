<script setup lang="ts">
import type { WorkExperienceModel } from '@/models/experience';

const props = defineProps<{
  work: WorkExperienceModel;
}>();

function getDateRangeLength() {
  const endPosition = props.work.positions[0]?.end;
  const endYear = endPosition && parseInt(endPosition.year, 10);
  const endMonth = endPosition && parseInt(endPosition.month, 10);

  const startPosition = props.work.positions[props.work.positions.length - 1]?.start;
  if (!startPosition) throw new Error('No start time for the position found');
  const startYear = parseInt(startPosition.year, 10);
  const startMonth = parseInt(startPosition.month, 10);
  const nowDate = new Date();

  const years: number = endYear ? endYear - startYear : nowDate.getFullYear() - startYear;
  const months = endMonth ? endMonth - startMonth : nowDate.getMonth() + 1 - startMonth;

  return years === 0
    ? `${months} Months`
    : `${years}${months >= 6 ? '.5+' : months > 0 ? '+' : ''} Years`;
}
</script>

<template>
  <div class="company-work-exp">
    <div class="work-experience" v-for="(p, i) in work.positions" v-bind:key="p.title">
      <div v-if="i === 0" class="company-icon">
        <img :src="work.icon" :alt="work.company" width="40" height="40" />
      </div>
      <div v-else class="nested-position-company-placeholder">
        <span class="nested-position-bullet"></span>
      </div>

      <h3 class="job-title">{{ p.title }}</h3>
      <div class="company">
        <span class="company-name">{{ work.company }}</span>
        - <span class="job-type">{{ work.type }}</span>
      </div>

      <div class="time">
        <span>{{ getDateRangeLength() }}</span>
      </div>

      <div class="job-desc" v-html="p.desc"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-experience {
  display: grid;
  grid-template-areas: 'icon title time' 'icon company time' 'empty desc desc';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 3.5rem 1fr auto;
  margin-bottom: 0.75rem;
  &:last-child {
    margin-bottom: 1.5rem;
  }
}
.company-icon {
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 0.75rem;
  > img {
    max-width: 100%;
  }
}
.nested-position-company-placeholder {
  grid-area: icon;
  place-self: center;
  margin-inline-end: 0.75rem;
}
.nested-position-bullet {
  aspect-ratio: 1/1;
  width: 10px;
  background: #ddd;
  border-radius: 10px;
  display: inline-block;
  box-shadow: 0 0 0 2px #fff, 0 0 0 3px #ddd;
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
  font-weight: bold;
  color: var(--text-2);
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
.work-experience {
  &:not(:last-child) {
    .job-desc {
      &:before {
        content: '';
        position: absolute;
        inset-inline-start: -2.1rem;
        height: calc(100% - 1rem);
        width: 1px;
        background: #ddd;
        top: 0.75rem;
      }
    }
  }
}
.job-desc {
  grid-area: desc;
  margin-top: 0.25rem;
  position: relative;
}
</style>
<style lang="scss">
.job-desc {
  > p:not(:last-child) {
    margin-block-end: 0.75rem;
  }
  > ul {
    margin-block-end: 0.75rem;
    padding-inline-start: 1.5rem;
  }
  > li {
  }
}
</style>