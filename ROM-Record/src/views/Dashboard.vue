<template>
  <title>Dashboard</title>
  <body>
  <nav class="dashboard">
  <div class="sidebar">
    <h1>Dashboard</h1>
    <div class="menu-item">
      <RouterLink to="/DatabaseView">Records</RouterLink>
      <RouterView />
    </div>
    <div class="menu-item">
      <a href="#">Settings</a>
    </div>
    <div class="menu-item">
      <a href="#">Logout</a>
  </div>
</div>
</nav>

</body>
</template>


<style>
body {
  margin: 0;
  padding: 0;
  background-color: #121212; /* Dark background color */
  font-family: Arial, sans-serif;
  color: white;
}
.sidebar {
  background-color: #0fa86b; /* Dark green sidebar */
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 150px;
  left: 20px;
  padding: 20px;
  border-radius: 10px; 
}
.content {
  margin-left: 250px; /* Adjust for sidebar width */
  margin-top: 160px; /* Add space for the header */
  padding: 20px;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
  position: center;
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