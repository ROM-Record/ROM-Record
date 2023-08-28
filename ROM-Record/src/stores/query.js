import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useQueryStore = defineStore('query', () => {
  const query = ref("")

  const input = computed(() => query.value)

  function setInput(newVal){
    this.query = newVal
  }

  return { query, input, setInput }
})
