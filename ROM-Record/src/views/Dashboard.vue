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
      <RouterLink to="/Logout">Logout</RouterLink>
      <RouterView/>
      </div>
     
</div>
 
</body>
</template>


