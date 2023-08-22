<template>
    <div>
        <h1>Games</h1>
        <ul v-if="loading">
            <li>Loading...</li>
        </ul>
        <ul v-else>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <div v-if="error" class="error-message">
            An error occured while fetching games.
        </div>
    </div>
</template>
  
  <script>
  import axios from 'axios';
  import { useAuthStore } from '../stores/auth.js';
  
  export default {
    data() {
      return {
        games: [],
        loading: true,
        error: false
      };
    },
    async mounted() {
        await this.fetchTwitchAuth();
        this.fetchGames();
    },
    methods: {
        //fetch on initial login
        //run on initial page load, put OAuth in a store
        //gets OAuth token needed for authorization in fetchGames()
        async fetchTwitchAuth(){
            try {
                const response = await axios.get(
                    'https://id.twitch.tv/oauth2/token?client_id=' + process.keys.env.VUE_APP_CLIENTID 
                    + '&client_secret=' + process.env.VUE_APP_SECRETTOKEN 
                    + '&grant_type=client_credentials'
                );
            useAuthStore().updateAuthToken(response.data.access_token); 
            } catch (error) {
                console.error(error);
                this.error = true;
            } finally {
                this.loading = false;
            }
        },

        //call to IGDB API that gets list of games
        async fetchGames() {
            try {
            const response = await axios.get(
                `https://api.igdb.com/v4/games`,
                {
                headers: {
                    'Client-ID': process.keys.env.VUE_APP_CLIENTID,
                    'Authorization': 'Bearer ' + authToken,
                    }
                }
            );
            this.games = response.data;
            this.loading = false;
            } catch (error) {
                console.error(error);
                this.error = true;
            } finally {
                this.loading = false;
            }
        }
    }
  };
  </script>

  <style>
    .error-message {
        color: red;
    }
  </style>