<script setup lang="ts"></script>

<template>
  <header>
    <div class="avatar-wrapper">
      <img alt="Avatar" class="avatar" src="./assets/avatar.jpg" width="125" height="125" />
    </div>

    <div class="header-side">
      <h1>Vahid Mohammadi</h1>
      <div class="contacts">
        <a href="https://www.linkedin.com/in/vahidmohammadi/">LinkedIn</a>
        <a href="https://stackoverflow.com/users/1889607/vahid/">StackOverFlow</a>
        <a href="mailto:vahidm1467@gmail.com">vahidm1467@gmail.com</a>
        <a href="https://vmoh.medium.com/">Medium articles</a>
        <a href="https://github.com/vmohir">Github</a>
        <a href="https://slides.vahid-mohammadi.ir/">Talks</a>
        <a href="https://dribbble.com/vmoh_ir">Dribbble Designs</a>
        <a href="tel:+989210329938">+989210329938</a>
      </div>
    </div>
  </header>
</template>

<style>
@import 'assets/base.scss';

header {
  display: flex;
}

.avatar-wrapper {
}

.avatar {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
