import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        displayName: null,
        email: null,
        pswd: null
    }),
    getters:{
        getDisplayName: (state) => { state.displayName; },
        getEmail: (state) => { state.email; }
    },
    actions:{
        addUser(name, email, pswd){
            this.displayName = name;
            this.email = email;
            this.pswd = pswd;
        }
    }

})