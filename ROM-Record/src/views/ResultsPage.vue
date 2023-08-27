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

const route = useRouter();
const query = route.params.query;

const games = ref([]);
const loading = ref(true);
const error = ref(false);

const fetchGames = async () => {
  try {
    // ... Your fetch logic here ...
  } catch (error) {
    // ... Error handling ...
  }
};

onMounted(() => {
  fetchGames();
});

const filteredGames = computed(() =>
  games.value.filter((game) =>
    game.name.toLowerCase().includes(query.toLowerCase())
  )
);
</script>
