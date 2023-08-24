import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authToken: null
    }),
    actions: {
        updateAuthToken(token) {
            this.authToken = token;
        }
    },
    getters: {
        authenticatedToken: state => state.authToken
    }
});