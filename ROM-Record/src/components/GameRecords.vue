<template>
<div>
    <div class="input-section">
        <input v-model="userInput.title" placeholder="Add game manually" />
        <select v-model="userInput.status">
            <option value="Playing">Playing</option>
            <option value="Want to play">Want to play</option>
            <option value="Played">Played</option>
        </select>
        <button @click="addGame">Add</button>
    </div>
    <div class="record-section">
        <ul>
            <li v-for="(game, index) in backlog" :key="index">
                {{ game.title }}
                [Added: {{ formatDate(game.timestamp) }}]
                <select v-model="game.status" @change="updateStatus(index)">
                    <option value="Playing">Playing</option>
                    <option value="Want to play">Want to play</option>
                    <option value="Played">Played</option>
                    <option value="Dropped">Dropped</option>
                </select>
                <button @click="removeGame(index)">Remove</button>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseResources';
import { useAuthStore } from '../stores/authStore';

export default {
data() {
    return {
        userInput: {
            title: '',
            date: null,
            status: 'Want to play'
        },
        //backlog: []
    };
},
methods: {
    async addGame() {
        if (this.userInput.title.trim() !== '') {
            //this.backlog.push({ ...this.userInput, timestamp: new Date() });
            //this.userInput.title = ''; // Clear the input field
            this.userInput.date = new Date();
            const uid = auth.currentUser.uid;
            console.log(auth.currentUser.uid);
            await setDoc(doc(db, 'users', uid, 'backlog', this.userInput.title), this.userInput);
            console.log('added ' + this.userInput.title);
        }
    },
    async updateStatus(index) {
    // Firebase update code goes here
        //this.backlog[index].status = this.backlog[index].status;
        this.userInput.status = index;
        await setDoc(doc(db, 'users', uid, 'backlog', this.userInput.title), this.userInput);
    },
    /** 
    formatDate(date) {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(date);
    },
    removeGame(index) {
        this.backlog.splice(index, 1);
    }**/
}
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>