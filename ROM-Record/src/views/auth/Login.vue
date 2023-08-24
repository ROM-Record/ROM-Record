<template>
    <div class="auth">
        <template v-if="!loggedIn">
            Email: <input type="text" v-model.trim="email"/>
            <br>
            Password: <input type="password" v-model.trim="password"/>
            <br>
            <RouterLink to="/signout"><button @click="login()">Login</button></RouterLink>
            <RouterLink to="/create-account"><button>Sign Up</button></RouterLink>
        </template>
    </div>
</template>


<script>
import { auth } from '../../firebaseResources';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';

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
                setPersistence(auth, browserLocalPersistence);
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
    }
}

</script>