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
                <button @click="removeGame(index)">Remove</button>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
props:{
    gameName: String
},
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
    addGame() {
    if (this.gameName.trim() !== '') {
        this.backlog.push({ ...this.gameName, timestamp: new Date() });
        console.log(`Logging game: ${this.gameName}`);
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
</style>