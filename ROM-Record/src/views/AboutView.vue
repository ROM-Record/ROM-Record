<script setup>
import Stopwatch from "../components/Stopwatch.vue";
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Stopwatch/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #2c9b66;
  font-family: NewRodin;
  color: white;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
