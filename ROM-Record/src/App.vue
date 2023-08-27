<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from "vue";
let input = ref("");
const dummies = ["apple", "banana", "orange"];
function filteredList() {
  return dummies.filter((dummy) =>
    dummy.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<template>
  
  <header>

    <div class="wrapper">
      
      <nav>
        <h1>ROM-Record</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/Dashboard">Dashboard</RouterLink>
        <RouterLink to="Login">Account</RouterLink>
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
  background-color: rgb(44, 155, 102);
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

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: NewRodin;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 1px 45px;
  background: white url("assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.dummy {
  background-color: rgb(0, 0, 0);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>