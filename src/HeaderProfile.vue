<script setup lang="ts">
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconMedium from '@/components/icons/IconMedium.vue';
import IconDribbble from '@/components/icons/IconDribbble.vue';
</script>

<template>
  <header>
    <div class="avatar-wrapper">
      <img alt="Avatar" class="avatar" src="./assets/avatar.jpg" width="100" height="100" />
    </div>

    <h1 class="resume-name">Vahid Mohammadi</h1>

    <div class="contacts">
      <a href="mailto:vahidm1467@gmail.com">
        <span class="material-symbols-outlined">mail</span><span>vahidm1467@gmail.com</span>
      </a>
      <a href="tel:+989210329938">
        <span class="material-symbols-outlined">call</span><span>+989210329938</span>
      </a>
      <a href="https://vahid-mohammadi.ir">
        <span class="material-symbols-outlined">language</span>
      </a>
      <a href="https://www.linkedin.com/in/vahidmohammadi/" aria-label="LinkedIn">
        <span><IconLinkedin /></span>
      </a>
      <a href="https://stackoverflow.com/users/1889607/vahid/" aria-label="StackOverFlow">
        <span><IconStackoverflow /></span>
      </a>
      <a href="https://vmoh.medium.com/" aria-label="Medium articles">
        <span><IconMedium /></span>
      </a>
      <a href="https://github.com/vmohir" aria-label="Github">
        <span><IconGithub /></span>
      </a>
      <a href="https://slides.vahid-mohammadi.ir/" aria-label="Talks">
        <span
          class="material-symbols-outlined"
          style="font-variation-settings: 'FILL' 0, 'wght' 900, 'GRAD' 0, 'opsz' 48"
        >
          slideshow
        </span>
      </a>
      <a href="https://dribbble.com/vmoh_ir" aria-label="Dribbble Designs">
        <span><IconDribbble /></span>
      </a>
    </div>

    <div class="summary">
      <p>
        I'm an experienced front-end developer and a chapter lead with a bit of interest in UI
        design and mobile app development. Also, with great abilities in team management and
        leadership.
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: grid;
  grid-template-areas: 'avatar name contacts' 'avatar summary summary';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr auto;
  margin: 0 0 1.5rem;
}

.avatar-wrapper {
  grid-area: avatar;
  margin-inline-end: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3px rgb(0 0 0 / 3%);
    border-radius: 4px;
  }
  .avatar {
    display: block;
    border-radius: 4px;
    position: relative;
    top: 5px;
  }
}

.contacts {
  grid-area: contacts;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  > a {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    color: var(--text-3);
    line-height: 20px;
    > span:first-child {
      width: 18px;
      height: 18px;
      font-size: 20px;
    }

    > span:last-child {
      margin-inline-start: 0.3rem;
    }
  }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48;
  }
}

.summary {
  grid-area: summary;
  margin-top: 0.25rem;
}

.resume-name {
  font-family: var(--font-title);
  font-weight: bold;
}
</style>
