<script setup lang="ts"></script>

<template>
  <div class="languages">
    <h3 class="languages-label">Languages:</h3>
    <ul class="languages-list">
      <li>English C1</li>
      <li>Persian Native</li>
    </ul>
  </div>
</template>

<style scoped>
.languages {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}
.languages-label {
  margin: 0;
  margin-inline-end: 0.5rem;
  font-weight: normal;
  font-size: 1rem;
}
.languages-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text-2);
}
</style>
