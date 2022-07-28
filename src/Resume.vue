<script setup lang="ts">
import HeaderProfile from '@/HeaderProfile.vue';
import WorkExperiences from '@/WorkExperiences.vue';
import Education from '@/Education.vue';
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
        <aside class="aside"></aside>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
@import 'assets/base.scss';

.resume-wrapper {
  background: #fff;
  width: 1080px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0px 3.8px 5.3px rgba(0, 0, 0, 0.028), 0px 12.7px 17.9px rgba(0, 0, 0, 0.042),
    0px 57px 80px rgba(0, 0, 0, 0.07);
  padding: 1rem;
}

.main-wrapper {
  display: flex;
}

.content {
  flex: 1 0 0;
}

.aside {
  flex: 0 0 350px;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
