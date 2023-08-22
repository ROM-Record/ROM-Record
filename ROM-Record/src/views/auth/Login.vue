<template>
    <div class="auth">
        <template v-if="!loggedIn">
            Email: <input type="text" v-model.trim="email"/>
            <br>
            Password: <input type="password" v-model.trim="password"/>
            <br>
            <button @click="login()">Login</button>
        </template>
        <template v-if="loggedIn">
            <button @click="logout()">Logout</button>
        </template>
    </div>

</template>


<script>
import { auth } from '../../firebaseResources';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

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
                console.log('logging in...');
                await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log('successfully logged in!')
                this.loggedIn = true;
            }
            catch(e){
                console.error('Error in login', e);
            }
        },
        async logout(){
            try{
                if(auth.currentUser){
                    console.log('logging out...');
                    await signOut(auth);
                    console.log('Successfully logged out!')
                    this.loggedIn = false;
                }
                else{
                    console.log('no user signed in');
                }
            }
             catch(err){
                console.log('error logging out');
             }
        }
    }
}

</script>