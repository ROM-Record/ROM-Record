<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from '../src/components/SearchBar.vue'
import GameRecord from '../src/components/GameRecords.vue'
import Dashboard from '../src/views/Dashboard.vue'
import Login from '../src/views/Login.vue'
</script>

<template>
  
  <header>

    <div class="wrapper">
      
      <nav>
        <h1>ROM-Record</h1>
        <RouterLink to ='Login'>Login</RouterLink>
        <RouterLink to="/DatabaseView">Dashboard</RouterLink>
        <SearchBar/>
        <GameRecord/>        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
h1{
  font-family: DelaGothicOne;
  font-size: 24px;
  color: white; /* Set the color for the h1 */
  right: 200px;
}

header {
  margin: auto;
  position: fixed;
  width: 100%;
  top: 0;
  left: 38%;
  text-align: center;
}
.wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  white-space: nowrap;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
nav top {
  max-height: 10px;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  /*nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    
    padding: 1rem 0;
    margin-top: 1rem;
  }*/
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