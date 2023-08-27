<script setup>
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
    <input type="text" v-model="input" placeholder="Search" />
    <div class="item dummy" v-for="dummy in filteredList()" :key="dummy">
    <p>{{ dummy }}</p>
    </div>
    <div class="item error" v-if="input&&!filteredList().length">
    <p>No results found!</p>
    </div>
</template>

<style>
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
background: white url("../src/assets/search-icon.svg") no-repeat 15px center;
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