import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        user:null,
    }),
    getters:{
        getEmail: (state) => { state.user.email; }
    },
    actions:{
        setUser(user){
            this.user = user;
        },
        signOut(){
            this.user = null;
        },
    }

})