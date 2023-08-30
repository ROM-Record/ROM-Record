<template>
  <title>Dashboard</title>
  <body>
  <div class="sidebar">
    <h1>Dashboard</h1>
    <div class="menu-item">
      <RouterLink to="/Records">Records</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="/Achievement">Achievements</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="/ViewGames">View Games</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="/EnterGames">Enter Games</RouterLink>
    </div>
    <!--<div class="menu-item"> -->
     <!-- <a href="#">Catalog</a> -->
    <!--</div> -->
    <div class="menu-item">
      <RouterLink to="/Status">Status</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="/Login">Logout</RouterLink>
      <RouterView/>
      
    
  </div>
</div>
  <div class="content">
  </div>
</body>
</template>


<style>
body {
  margin: 0;
  padding: 0;
  background-color: #2c9b66;
  font-family: NewRodin;
  color: white;
}
.sidebar {
  background-color: #086942; /* Dark green sidebar */
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
  color: #64dd17; /* Highlight color on hover */
}
</style>