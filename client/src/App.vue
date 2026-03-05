<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <div class="container">
    <h1 class="title is-1">Welcome to the Home Page!</h1>
    <RouterView />
  </div>
  </template>

<style scoped>

</style>
