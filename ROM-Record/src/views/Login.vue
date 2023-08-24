<!-- Signup page-->

<script setup>
    import { ref } from "vue";
    let input = ref("");
</script>

<template>
    <div class="Signup">
        <title>Signup</title>
        <header>Create an account!</header>

        <div class="wrapper">
            <input type="text" v-model="username" placeholder="Username"/>
            <input type="text" v-model="password" placeholder="Password"/>
        </div>
    </div>
</template>

<style scoped>
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
</style>