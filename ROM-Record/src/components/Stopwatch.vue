<template>
  <div>
    <div class="parent grid" v-if="!running">
      <button class="child" @click="startStopwatch">Start Stopwatch</button>
      <p class="child">{{ elapsedTime }}</p>
      <div class="save-prompt" v-if="savePrompt">
        <p>Do you want to save the time to your records?</p>
        <button @click="saveTime">Yes</button>
        <button @click="cancelSave">No</button>
      </div>
    </div>
    <div class="parent grid" v-else>
      <button class="child" @click="stopStopwatch">Stop Stopwatch</button>
      <p class="child">{{ elapsedTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      running: false,
      startTime: 0,
      elapsedTime: '00:00:00',
      savePrompt: false,
      started: false,
    };
  },
  methods: {
    startStopwatch() {
      this.running = true;
      this.startTime = Date.now();
      this.updateElapsedTime();
      document.addEventListener('keydown', this.handleKeyPress);
    },
    
    stopStopwatch() {
      this.running = false;
      this.savePrompt = true; // Show the save prompt
      document.removeEventListener('keydown', this.handleKeyPress);
    },
    updateElapsedTime() {
      if (this.running) {
        const currentTime = Date.now();
        const deltaTime = currentTime - this.startTime;
        const formattedTime = this.formatTime(deltaTime);
        this.elapsedTime = formattedTime;
        requestAnimationFrame(this.updateElapsedTime);
      }
    },
    formatTime(time) {
      const milliseconds = Math.floor(time % 1000);
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    },
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        if (this.running) {
          this.stopStopwatch();
        } else {
          this.startStopwatch();
        }
      }
    },

    promptSave() {
      this.savePrompt = true;
    },

    saveTime() {
      
      this.$emit('timeRecorded', this.elapsedTime);

      // Reset the state
      this.savePrompt = false;
      this.elapsedTime = '00:00:00';
    },

    cancelSave() {
      this.savePrompt = false;
    },
  },
};
</script>


<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr
}

.save-prompt {
  margin-top: 10px;
  text-align: center;
}
</style>