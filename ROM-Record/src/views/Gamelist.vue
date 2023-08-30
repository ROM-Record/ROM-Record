<script setup>
import SearchBar from '../../src/components/SearchBar.vue'
import GameRecord from '../../src/components/GameRecords.vue'
import Dashboard from '../views/Dashboard.vue';
</script>

<template>
  <div class="container">
  <dashboard></dashboard>
 

    <h1>
        
        <nav>
          <SearchBar/>
          <GameRecord/>
        </nav>
    </h1>
  </div>
  
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    h1 .wrapper {
        margin-top:40%;
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
</style>

<style>
    @font-face {
        font-family: 'NewRodin';
        src: url('../assets/FOT-NewRodin Pro B.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'DelaGothicOne';
        src: url('../assets/DelaGothicOne-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    #new-font{
        font-family: 'NewRodin';
        font-family: 'DelaGothicOne';
    }
</style>