import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        user:null,
        loggedIn: false,
    }),
    getters:{
        getUser: (state) => { return state.user; }
    },
    actions:{
        setUser(user){
            this.user = user;
            this.loggedIn = true;
        },
        signOut(){
            this.user = null;
            this.loggedIn = false;
        },
    }

})