import HelloWorld from './components/HelloWorld.vue';

<script setup lang="ts"></script>

<template>
  <HelloWorld msg="CodeLogger" />
  <h1 class="text-5xl font-bold underline">Hello CodeLogger!</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
