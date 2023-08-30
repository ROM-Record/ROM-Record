<template>
  <div>
    <h1>Game Search Results</h1>
    <game-list :games="filteredGames" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import GameList from '../components/GameList.vue';
</script>