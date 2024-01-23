<script setup lang="ts">
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
</script>

<template>
  <div class="stackoverflow">
    <div class="stackoverflow-icon">
      <IconStackoverflow :is-colored="true" />
    </div>
    <div class="reputation"><span class="rep-number">6k+</span> <span>Reputation in StackOverFLow</span></div>
    <div class="badge">Angular bronze badge</div>
    <div class="tags">
      <span>Top</span>
      <div class="percent-wrapper">
        <div class="percent">5%</div>
        <div class="tag-names"><span>Angular</span><span>TypeScript</span></div>
      </div>
      <div class="percent-wrapper">
        <div class="percent">10%</div>
        <div class="tag-names">
          <span>HTML</span><span>CSS</span><span>NPM</span><span>JavaScript</span><span>Git</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stackoverflow {
  display: grid;
  grid-template-areas: 'icon rep year' 'icon badge badge' 'tags tags tags';
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(3, auto);
  align-items: center;
}
.stackoverflow-icon {
  width: 40px;
  grid-area: icon;
  margin-inline-end: 0.5rem;
}
.reputation {
  grid-area: rep;

  .rep-number {
    font-size: 1.25rem;
    line-height: 20px;
    font-weight: bold;
  }
}

.badge {
  grid-area: badge;
  line-height: 16px;
  color: var(--text-3);
  font-weight: 600;
}
.year {
  grid-area: year;
  line-height: 16px;
  color: var(--text-3);
}

.tags {
  grid-area: tags;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  grid-gap: 0.5rem;
  .percent-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tag-names {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    line-height: 1rem;
    color: var(--text-3);
  }
  .percent {
    font-size: 1.2rem;
    font-weight: 500;
    margin-inline-end: 0.5rem;
    border-radius: 4px;
    background: #eeeeee;
    padding: 0.3rem;
    line-height: 1rem;
    border: 1px solid #ddd;
  }
}
</style>
