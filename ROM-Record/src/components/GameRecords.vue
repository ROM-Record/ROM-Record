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
            <select v-model="game.status" @change="updateStatus(index)">
                <option value="Playing">Playing</option>
                <option value="Want to play">Want to play</option>
                <option value="Played">Played</option>
                <option value="Dropped">Dropped</option>
            </select>
            [Added: {{ formatDate(game.timestamp) }}]
            </li>
        </ul>
    </div>
</div>
</template>

<script>
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
    addGame() {
    if (this.userInput.title.trim() !== '') {
        this.backlog.push({ ...this.userInput, timestamp: new Date() });
        this.userInput.title = ''; // Clear the input field
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
    }
}
};
</script>