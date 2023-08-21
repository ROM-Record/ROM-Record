<template>
    <div>
      <h1>Games</h1>
      <ul>
        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        games: []
      };
    },
    mounted() {
      this.fetchGames();
    },
    methods: {
      async fetchGames() {
        try {
          const response = await axios.get(
            `https://api.igdb.com/v4/games`,
            {
              headers: {
                'Client-ID': process.keys.env.VUE_APP_CLIENTID,
                'Authorization': process.env.VUE_APP_SECRETTOKEN,
              }
            }
          );
          this.games = response.data;
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>