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
        this.fetchTwitchAuth();
        this.fetchGames();
    },
    methods: {
        async fetchTwitchAuth(){
            try {
                const response = await axios.get(
                    'https://id.twitch.tv/oauth2/token?client_id=' + process.keys.env.VUE_APP_CLIENTID + '&client_secret=' + process.env.VUE_APP_SECRETTOKEN + '&grant_type=client_credentials'
            );
            this.OAuth = response.data;
            } catch (error) {
                console.error(error);
            }
        },

        async fetchGames() {
            try {
            const response = await axios.get(
                `https://api.igdb.com/v4/games`,
                {
                headers: {
                    'Client-ID': process.keys.env.VUE_APP_CLIENTID,
                    'Authorization': 'Bearer ' + this.OAuth,
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