<template>
    <div class="auth">
        <template v-if="!loggedIn">
            Email: <input type="text" v-model.trim="email"/>
            <br>
            Password: <input type="password" v-model.trim="password"/>
            <br>
            <button @click="loggedIn()">Login</button>
            <br>
            <button @click="createAccount()">Create Account</button>
        </template>
    </div>

</template>


<script>
import { auth } from '../../firebaseResources';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default{
    data(){
        return{
            email: null,
            password: null,
            notFound: false,
            invalidPswd: false,
            loggedIn: false,
        }
    },
    methods:{
        async login(){
            try{
                this.notFound = false;
                this.invalidPswd = false;
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.loggedIn = true;
            }
            catch(e){
                console.error('Error in login', e);
            }
        },
        async createAccount(){
            try{
                this.notFound = false;
                this.invalidPswd = false;
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                this.loggedIn = true;
                console.log('Current user', auth.currentUser);
            }
            catch(e){
                console.error('Couldn\'t create account', e);
            }
        }
    }

}

</script>