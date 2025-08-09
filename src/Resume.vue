<script setup lang="ts">
import HeaderProfile from '@/HeaderProfile.vue';
import WorkExperiences from '@/WorkExperiences.vue';
import Education from '@/Education.vue';
import SkillsList from '@/SkillsList.vue';
import HonorsList from '@/HonorsList.vue';
</script>

<template>
  <div class="resume-wrapper">
    <HeaderProfile />

    <main class="container">
      <div class="main-wrapper">
        <article class="content">
          <WorkExperiences />
          <Education />
        </article>
        <aside class="aside">
          <section class="skills-list">
            <SkillsList />
          </section>
          <section class="honors-list">
            <HonorsList />
          </section>
        </aside>
      </div>
    </main>
  </div>
</template>

<style scoped>
.resume-wrapper {
  background: #fff;
  width: 1080px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0px 3.8px 5.3px rgba(0, 0, 0, 0.028),
    0px 12.7px 17.9px rgba(0, 0, 0, 0.042), 0px 57px 80px rgba(0, 0, 0, 0.07);
  padding: 1.5rem;
  @media print {
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }
}

.main-wrapper {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    gap: 0.5rem;
  }
}

.content {
  flex: 1 0 500px;
}

.aside {
  --max-width: 320px;
  --min-width: 285px;
  flex: 1 0 min(var(--max-width), 30%);
  min-width: var(--min-width);
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-self: flex-start;
}
.skills-list,
.honors-list {
  min-width: var(--min-width);
  flex: 1 1 var(--max-width);
}
.skills-list {
  flex: 1 1 var(--max-width);
}
</style>
