<template>
    <div class="container">
    <dashboard></dashboard>
   
  
     
    
      <div class="DatabaseView">
      
        
        <div >
          <h2>Status</h2>
          <ul>
            <li v-for="(status, index) in statusData" :key="index">
              {{ getStatusName(status) }}
            </li>
          </ul>
        </div>
  
  
       
  
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
        
         statusData: [],    
         
    
      };
  
    },
    methods: {
   
      async viewStatus() {
   
        try {
          const statusCollection = collection(db, 'status');
          const snapshot = await getDocs(statusCollection);
          this.statusData = snapshot.docs.map(doc => doc.data());
          this.showStatus = true;
        } catch (error) {
          console.error('An error occurred:', error.message);
          console.error('Stack trace:', error.stack);
        }
      },
      getStatusName(status) {
        return status.abandoned ? 'Abandoned' : (status.finished ? 'Finished' : 'Not Finished');
  
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
   
    .DatabaseView button {
    background-color: #135038; /* Dark green sidebar */
    border-width: 5px;
    color: white; 
    box-sizing: border-box;
    font-size: medium; 
    flex: 1; 
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
  