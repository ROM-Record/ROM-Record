<template>
<div>
    <div class="input-section">
        <input v-model="userInput.title" placeholder="Enter game title" />
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
import { db } from '../firebaseResources';

export default {
data() {
    return {
    userInput: {
        title: '',
        status: 'Want to play'
    },
    backlog: []
    };
},
methods: {
    async addGame() {
        if (this.userInput.title.trim() !== '') {

        //contain game entry info into a string
        const newEntry = {
                title: this.userInput.title,
                status: this.userInput.status,
                timestamp: new Date()
        };

        //Add game entry to firestore
        try {
                await db.collection('users').doc('user_101').update({
                    backlog: [...this.backlog, newEntry]
                });

                this.backlog.push(newEntry);
                this.userInput.title = '';
        } catch(error) {
                console.error('Error adding game:', error);
        }
        }
    },
    updateStatus(index) {
    // Firebase update code goes here
    this.backlog[index].status = this.backlog[index].status;
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
    }
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

.input-section {
  display: flex;
  align-items: center;
  gap: 10px; /* Adjust the gap between elements as needed */
}
</style>