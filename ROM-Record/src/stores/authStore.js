import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
        displayName: null,
        email: null,
        uid: null
    }),
    getters:{
        getDisplayName: (state) => { state.displayName; },
        getEmail: (state) => { state.email; }
    },
    actions:{
        addUser(name, email, uid){
            this.displayName = name;
            this.email = email;
            this.uid = uid;
        }
    }

})