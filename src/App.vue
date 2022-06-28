<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <div class="resume-wrapper">
    <header>
      <div class="avatar-wrapper">
        <img
          alt="Avatar"
          class="avatar"
          src="./assets/avatar.jpg"
          width="125"
          height="125"
        />
      </div>

      <div class="header-side">
        <h1>Vahid Mohammadi</h1>
        <div class="contacts">
          <a href="https://www.linkedin.com/in/vahidmohammadi/">LinkedIn</a>
          <a href="https://stackoverflow.com/users/1889607/vahid/"
            >StackOverFlow</a
          >
          <a href="mailto:vahidm1467@gmail.com">vahidm1467@gmail.com</a>
          <a href="tel:+989210329938">+989210329938</a>
        </div>
      </div>
    </header>

    <main class="container">
      <div class="main-wrapper">
        <article></article>
        <aside></aside>
      </div>
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";
body {
  background: #f9f9f9;
}
#app {
  display: flex;
  padding: 1rem;
  background: #f9f9f9;
}
.resume-wrapper {background: #fff;
  width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 3.8px 5.3px rgba(0, 0, 0, 0.028),
    0px 12.7px 17.9px rgba(0, 0, 0, 0.042), 0px 57px 80px rgba(0, 0, 0, 0.07);
  padding: 1rem;
}

header {
  display: flex;
}

.avatar-wrapper {
}
.avatar {
  display: block;
  margin: 0 auto 2rem;
}

.main-wrapper {
  display: flex;
}
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
