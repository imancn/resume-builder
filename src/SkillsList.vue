<script setup lang="ts">
import type { Skill } from '@/models/skill';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';

const skills: Skill[] = [
  { name: 'HTML CSS', years: 9, topPercentileInStackoverflow: 10 },
  { name: 'JavaScript', years: 6, topPercentileInStackoverflow: 10 },
  { name: 'TypeScript', years: 5, topPercentileInStackoverflow: 5 },
  {
    name: 'Angular',
    years: 5,
    topPercentileInStackoverflow: 5,
    badge: 'bronze',
    badgeLink: 'https://stackoverflow.com/help/badges/6902/angular?userid=1889607',
  },
  { name: 'React', years: 2 },
  { name: 'Webpack', years: 3 },
];
const otherSkills: string[] = [
  'Svelte',
  'SCSS',
  'Gatsby',
  'NodeJS',
  'GraphQL',
  'Gulp',
  'Gitlab CI',
  'Regex',
  'SVG',
  'Rollup',
  'Wordpress',
  'Redux',
  'MongoDB',
  'Flutter',
  'Bootstrap',
];
</script>

<template>
  <h3 class="section-title">Skills</h3>
  <ul class="skills-list">
    <li v-for="s of skills" :key="s.name" class="skill">
      <div class="skill-name">{{ s.name }}</div>
      <a v-if="s.badge" :class="'badge badge-' + s.badge" :href="s.badgeLink" target="_blank">{{
        s.badge
      }}</a>
      <div
        v-if="s.topPercentileInStackoverflow"
        class="top-percentile"
        :title="`Top ${s.topPercentileInStackoverflow}% in StackOverFlow`"
      >
        Top <span class="percentile">{{ s.topPercentileInStackoverflow }}%</span> in
        <span class="stackoverflow-icon"><IconStackoverflow :is-colored="true" /></span>
      </div>
      <div class="skill-years">{{ s.years }}+ Years</div>
    </li>
  </ul>
  <ul class="other-skills">
    <li v-for="s of otherSkills" :key="s">
      <span>{{ s }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.skills-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.skill {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}
.skill-name {
  font-weight: 600;
  font-family: var(--font-title);
}
.skill-years {
  margin-inline-start: auto;
}
.top-percentile {
  margin-inline-start: 0.75rem;
  //margin-inline-start: auto;
  color: var(--text-3);
  opacity: 0.5;

  .percentile {
    color: #000;
    opacity: 0.8;
  }

  .stackoverflow-icon {
    width: 14px;
    height: 14px;
    display: inline-block;
  }
}
.badge {
  padding: 0.25rem;
  line-height: 11px;
  font-size: 14px;
  border-radius: 4px;
  color: var(--text-3);
  background: #eee;
  margin-inline-start: 0.5rem;
  cursor: pointer;
  &::before {
    content: '';
    vertical-align: 1px;
    margin-inline-end: 0.25rem;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background-color: #666666;
    display: inline-block;
  }
  &.badge-bronze {
    &::before {
      background: #c27300;
    }
  }
}

.other-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  line-height: 12px;
  font-family: var(--font-title);
  color: var(--text-2);
  > li {
    padding: 0;
    margin: 0;
  }
}
</style>
