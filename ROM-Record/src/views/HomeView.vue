<template>
  <main>
    <TheWelcome />
    <h1>Welcome to Rom-Record!</h1>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
 
  background-image: linear-gradient( 0.30turn, rgb(10, 0, 75) , rgb(15, 41, 118), rgb(10, 0, 75));
  
  font-family: NewRodin;
  color: white;
}
.sidebar {
 
  background-image: linear-gradient( to bottom right, rgb(24, 2, 33) , rgb(44, 37, 120));
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 100px;
  left: 20px;
  padding: 20px;
  border-radius: 10px; 
}
.content {
  margin-left: 250px; /* Adjust for sidebar width */
  margin-top: 140px; /* Add space for the header */
  padding: 20px;
}
h1 {
  font-size: 24px;
  text-align: center;
}
.menu-item {
  margin-bottom: 10px;
}
.menu-item a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  display: block;
}
.menu-item a:hover {
  color: #a601a1; /* Highlight color on hover */
}
</style>
