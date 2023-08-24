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
        //fetch on initial login
        //run on initial page load, put OAuth in a store
        //gets OAuth token needed for authorization in fetchGames()
        
        //call to IGDB API that gets list of games
        var myHeaders = new Headers();
        myHeaders.append("x-api-key", "DwqGnrnS3CbBHegC6TzA4sHNlKGnq4w79eD8vW43");
        myHeaders.append("Content-Type", "text/plain");

        var raw = "fields screenshots.url; limit 10;";

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://lnattp9ct5.execute-api.us-west-2.amazonaws.com/production/v4/games", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
  };
  </script>

  <style>
    .error-message {
        color: red;
    }
  </style>