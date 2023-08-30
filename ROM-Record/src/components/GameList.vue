<template>
  <div>
    <ul v-if="loading">
      <li>Loading...</li>
    </ul>
    <ul v-else>
      <li class='parent grid' v-for="game in games" :key="game.id">
        <div class='child'>{{ game.name }}</div>
        <div class='child'><ListLogging :gameName="game.name" /></div>
      </li>
    </ul>
    <div v-if="error" class="error-message">
      An error occurred while fetching games.
    </div>
  </div>
</template>

<script>
import ListLogging from '../components/ListLogging.vue';
import { useQueryStore } from '@/stores/query'

export default {
  components: {
    ListLogging,
  },
  data() {
    return {
      loading: true,
      error: false,
      games: [] // Initialize games as an empty array
    };
  },
  mounted() {
    // Fetch games when the component is mounted
    this.fetchGames();
    this.$watch(
      () => useQueryStore().query,
      () => {
        this.fetchGames();
      }
    );
  },
  methods: {
    fetchGames() {
      this.loading = true; // Set loading to true before fetching
      
      const searchTerm = useQueryStore();
      let myHeaders = new Headers();
      myHeaders.append("x-api-key", "DwqGnrnS3CbBHegC6TzA4sHNlKGnq4w79eD8vW43");
      myHeaders.append("Content-Type", "text/plain");

      let raw = `search \"${searchTerm.query}\"; fields name;`;

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://lnattp9ct5.execute-api.us-west-2.amazonaws.com/production/v4/games", requestOptions)
        .then((response) => response.json()) // Parse response as JSON
        .then((data) => {
          this.loading = false;
          this.games = data; // Update games data property with fetched results
        })
        .catch((error) => {
          this.loading = false;
          this.error = true;
          console.log("error", error);
        });
    },
  },
};
</script>

<style>
.error-message {
  color: red;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr
}
</style>
