<template>
<div>
    <div class="input-section">
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
                <div class='child'><Stopwatch @timeRecorded="handleTimeRecorded" /></div>
                <button @click="removeGame(index)">Remove Entry</button>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Stopwatch from '../components/Stopwatch.vue';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseResources';

export default {
props:{
    gameName: String,
    igId: String,
},
components: {
    Stopwatch
},
data() {
    return {
    userInput: {
        title: '',
        date: null,
        status: 'Want to play',
        igdbID: '',
    },
    backlog: []
    };
},
methods: {
        async addGame() {
            if (this.gameName.trim() !== '') {
                console.log(`Logging game: ${this.gameName}`); 
                this.userInput.title = this.gameName;
                this.userInput.date = new Date();
                this.userInput.igdbID = this.igId;
                const uid = auth.currentUser.uid;
                //console.log(this.igId);
                await setDoc(doc(db, 'users', uid, 'backlog', this.userInput.title), this.userInput);
                console.log('added ' + this.userInput.title);
            }
        },
        async updateStatus(index) {
            // Firebase update code goes here
            this.userInput.status = index;
            await setDoc(doc(db, 'users', uid, 'backlog', this.userInput.title), this.userInput);
        },
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
    },
    handleTimeRecorded(timeRecorded) {
        this.backlog.push({ title: timeRecorded, timestamp: new Date() });
        console.log(`Logging time: ${timeRecorded}`);
    },
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