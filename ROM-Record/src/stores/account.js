import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const Account = defineStore('account', {
    state: () => ({
        isLoggedIn: false
    }),
    actions: {
        updateLogIn(loginStatus) {
            this.isLoggedIn = loginStatus;
        }
    },
    getters: {
        getLoginStatus: state => state.isLoggedIn
    }
});