<script setup lang="ts">
defineProps<{
  work: WorkExperienceModel
}>()
</script>

<template>
  <div class="work-experience">
    <work.icon />
    <h3>{{work.title}}</h3>
  </div>
</template>

<style scoped>

</style>
