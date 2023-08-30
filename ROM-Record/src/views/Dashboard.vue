<template>
  <title>Dashboard</title>
  <body>
  <div class="sidebar">
    <h1>Dashboard</h1>
    <div class="menu-item">
      <RouterLink to="/Records">Records</RouterLink>
    </div>
    <div class="menu-item">
      <RouterLink to="/Logout">Logout</RouterLink>
      <RouterView/>
    </div>
  </div>
 
</body>
</template>
