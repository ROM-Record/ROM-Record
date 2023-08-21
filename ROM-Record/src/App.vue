<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <header>

    <div class="wrapper">
      
      <nav>
        <h1>ROM-Record</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
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
  top: 40px;
  margin-right: 240px; /* Push h1 to the left */
  align-items: center;
}

header {
  line-height: 1.5;
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  background-color: rgb(44, 155, 102);
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
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    
    padding: 1rem 0;
    margin-top: 1rem;
  }
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