<script setup>
import SearchBar from '../../src/components/SearchBar.vue'
import GameRecord from '../../src/components/GameRecords.vue'
</script>

<template>

    <header>
  
      <div class="wrapper">
        
        <nav>
          <SearchBar/>
          <GameRecord/>
        </nav>
      </div>
    </header>
  
</template>

<style scoped>
    .wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
</style>

<style>
    @font-face {
        font-family: 'NewRodin';
        src: url('assets/FOT-NewRodin Pro B.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'DelaGothicOne';
        src: url('assets/DelaGothicOne-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    #new-font{
        font-family: 'NewRodin';
        font-family: 'DelaGothicOne';
    }
</style>