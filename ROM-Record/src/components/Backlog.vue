<template>
    <div class="container">
    <dashboard></dashboard>
   
  
     
    
      <div class="DatabaseView">
        
        <h1>Records</h1>
        
  
  
        <br>
        <div>
          <h2>Catalog</h2>
          <ul>
            <li v-for="(catalog, index) in catalogData" :key="index">
              {{ catalog.title }} - {{ catalog.description }} - {{ catalog.generes }}
            </li>
          </ul>
        </div>
        <br>
  
  
      </div>
    </div>
    </template>
  
  
  
  <script>
  import { auth } from '../firebaseResources';
      import { signInWithEmailAndPassword } from 'firebase/auth';
      import { fetchSignInMethodsForEmail, signOut } from 'firebase/auth';
      import { useAuthStore } from '../stores/authStore';
  import Dashboard from '../views/Dashboard.vue';
  import { db } from '../firebaseResources';
  import {
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
    getDocs,
    query,
    where,
    deleteDoc,
  } from 'firebase/firestore'
  
  export default {
    components: {
      Dashboard
    },
  
    data() {
      return {
         
         catalogData: [],
         
    
      };
  
    },
    created() {
    this.viewCatalog(); // Call the method here
    
  },
    methods: {
    
      async viewCatalog() {
      
        try {
          const catalogCollection = collection(db, 'catalog');
          const snapshot = await getDocs(catalogCollection);
  
          this.catalogData = snapshot.docs.map(doc => doc.data());
          this.showCatalog = true; // Show achievements data section
        } catch (error) {
          console.error('An error occurred:', error.message);
          console.error('Stack trace:', error.stack);
        }
      },
   
  
  
  
    },
  
  
  
  
      
  
  
  }
  
  </script>
  
    
  
  
  <style>
  
  
  .container {
    display: flex;
    align-items: flex-start; /* Center items vertically */
    min-height: 100vh;
  }
  
  .DatabaseView {
    padding: 60px;
    border-radius: 12px;
    color: white; /* Text color */
    
    margin-top: 200px; /* Offset from dashboard */
    box-sizing: border-box;
    flex: 1; /* Expand to fill available space */
    
    min-width: 1000px;
    min-height: 700px;
  }
  
  .DatabaseView h1{
      align-items: center;
      padding-bottom: 30px;
      margin-left: 180px;
      
  
    }
    .h2{
      align-items: center;
      padding-top: 30px;
      margin-left: 340px;
  
    }
   
    
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: top;
    }
  
    body {
      margin: 0;
      padding: 0;
      /*background-color: #121212; /* Dark background color */
      font-family: Arial, sans-serif;
      color: white; 
    }
  }
    </style>
  