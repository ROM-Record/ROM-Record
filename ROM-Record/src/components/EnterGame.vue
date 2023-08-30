<template>
    <div class="container">
    <dashboard></dashboard>
   
  
     
    
      <div class="DatabaseView">
        
        <h1>Records</h1>
        
      
  
        
  
   <!--Section for Game Entry-->
   <div>
        <h2>Game Entry</h2>
        <br>
        Title:<input type="text" v-model.trim="title" />
        <br>
        Date Added :<input type="text" v-model.trim="date" />
        <br>
        Priority:<input type="text" v-model.trim="priority" />
        <br>
        Timeplayed:<input type="text" v-model.trim="timeplayed" />
        <button @click="enterGame()">Enter</button>
        <br>
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
        
        date: '', // Store the entered date
        priority: '', // Store the entered priority
        timeplayed: '', // Store the entered timeplayed
        title:'',
    
      };
  
    },
    methods: {
    
         
  
      async enterGame() {
    
        
        try {
          // Get the currently logged-in user's uid
  
          const user = auth.currentUser;
          if (!user) {
            console.error('No user is logged in.');
            return;
          }
          const gameEntryCollection = collection(db, `users/${user.uid}/game_entry`);
          //const gameEntryCollection = collection(db, 'game_entry');
        
          
          // Create a new game entry object based on the entered data
          const newGameEntry = {
            date: this.date,
            priority: this.priority,
            timeplayed: this.timeplayed,
            title: this.title,
          };
  
          // Add the new game entry to the collection
          await addDoc(gameEntryCollection, newGameEntry);
  
          // Clear the input fields after successfully adding the game entry
          this.date = '';
          this.priority = '';
          this.timeplayed = '';
          this.title = '';
  
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
  