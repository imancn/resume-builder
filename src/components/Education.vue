<script setup lang="ts">
import UtLogo from '@/assets/university-of-tehran.jpeg';
</script>

<template>
  <div class="company-work-exp">
    <div class="education">
      <div class="company-icon">
        <img :src="UtLogo" alt="University of Tehran" width="40" height="40" />
      </div>

      <h3 class="title">University of Tehran</h3>
      <div class="job-metadata">
        <span class="company-name">Bachelor's degree, Computer Software Engineering</span>
      </div>

      <div class="time">
        <span class="position-date-range">2015 - 2019</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.education {
  display: grid;
  grid-template-areas: 'icon title time' 'icon company time' 'empty desc desc';
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 3.5rem 1fr auto;
  margin-bottom: 0.75rem;
  &:last-child {
    @media not print {
      margin-bottom: 1.5rem;
    }
  }
  @media print {
    break-inside: avoid;
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
.position-date-range {
  color: var(--text-3);
}
.job-metadata {
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
  font-weight: normal;
}
.position-time {
  margin-inline-start: 0.75rem;
  font-weight: normal;
  font-style: italic;
  color: var(--text-3);
}
.job-title {
  grid-area: title;
  line-height: 22px;
}
</style>
