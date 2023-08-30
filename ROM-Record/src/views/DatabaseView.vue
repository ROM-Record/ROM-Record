<template>
  <div class="container">
  <dashboard></dashboard>
 

   
  
    <div class="DatabaseView">
      
      <h1>Records</h1>
      <!-- Section for Selection -->
     
      <!--<button @click="viewAchievements()">View Achievements</button>
      Display Achievements Data 
     
      <button @click="viewGames()">View Game</button>
    
      <button @click="viewCatalog()">View Catalog</button>
      
      <button @click="viewStatus()">View Status</button>
     
      button @click="viewProfile()">View Profile</button> 

      <button @click="viewGameEntry()">Enter Game</button>
       -->


      <br>
      <div v-if="showAchievements">
        <h2>Achievements</h2>
        <ul>
          <li v-for="(achievement, index) in achievementsData" :key="index">
            {{ achievement.title }} - {{ achievement.description }}
          </li>
        </ul>
      </div>
      <br>

      <br>
      <div v-if="showGame">
        <h2>Games</h2>
        <ul>
          <li v-for="(games, index) in gameData" :key="index">
            {{ games.title }} - {{ games.priority }}- {{ games.date }}
          </li>
        </ul>
      </div>
      <br>

      
      <div v-if="showStatus">
        <h2>Status</h2>
        <ul>
          <li v-for="(status, index) in statusData" :key="index">
            {{ getStatusName(status) }}
          </li>
        </ul>
      </div>


      <br>
      <div v-if="showCatalog">
        <h2>Catalog</h2>
        <ul>
          <li v-for="(catalog, index) in catalogData" :key="index">
            {{ catalog.title }} - {{ catalog.description }} - {{ catalog.generes }}
          </li>
        </ul>
      </div>
      <br>

 <!--Section for Game Entry-->
 <div v-if="showGameEntry">
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
      showAchievements: false, // Control visibility of achievements data
       achievementsData: [],  
       showStatus: false, // Control visibility of achievements data
       statusData: [],    
       showGame: false, // Control visibility of achievements data
       gameData: [],    
       catalogData: [],
       showCatalog: false,// Show achievements data section
       showGameEntry: false,
       date: '', // Store the entered date
      priority: '', // Store the entered priority
      timeplayed: '', // Store the entered timeplayed
      title:'',
  
    };

  },
  methods: {
  async viewAchievements() {
    this.hideAllSections();
      try {
        const user = auth.currentUser;
        if (!user) {
          console.error('No user is logged in.');
          return;
        }
        const achievementsCollection = collection(db, `users/${user.uid}/achievements`);
        const snapshot = await getDocs(achievementsCollection);

        this.achievementsData = snapshot.docs.map(doc => doc.data());
        this.showAchievements = true; // Show achievements data section
      } catch (error) {
        console.error('An error occurred:', error.message);
        console.error('Stack trace:', error.stack);
      }
    },
    async viewGames() {
      this.hideAllSections();
      try {
        // Get the currently logged-in user's uid
        const user = auth.currentUser;
        if (!user) {
          console.error('No user is logged in.');
          return;
        }
        const gameCollection = collection(db, `users/${user.uid}/game_entry`);
        //const gameCollection = collection(db, 'game_entry');
        const snapshot = await getDocs(gameCollection);

        this.gameData = snapshot.docs.map(doc => doc.data());
        this.showGame = true; // Show achievements data section
      } catch (error) {
        console.error('An error occurred:', error.message);
        console.error('Stack trace:', error.stack);
      }
    },
    
    async viewStatus() {
      this.hideAllSections();
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
    async viewCatalog() {
      this.hideAllSections();
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
 // make function for entering information and button seperate
     async viewGameEntry(){ 
      this.hideAllSections();
      this.showGameEntry = true; 
       },

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

    hideAllSections() {
      // Hide all sections
      this.showAchievements = false;
      this.showGame = false;
      this.showCatalog = false;
      this.showStatus = false;
      this.showGameEntry = false;
      
       
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
    color: white; 
  }
}
  </style>
