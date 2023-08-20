<template>
    <div class="auth">
        Display Name: <input type="text" v-model.trim="name"/>
        <br>
        Email: <input type="text" v-model.trim="email"/>
        <br>
        Password: <input type="password" v-model.trim="pswd"/>
        <br>
        <button @click="createAccount()">Create Account</button>
    </div>
</template>


<script>
import { auth } from '../../firebaseResources';
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default{
    data(){
        return{
            hasAccount: false,
            loggedIn: false,
            name: null,
            email: null,
            pswd: null,
        }
    },
    methods:{
        async createAccount(){
            try{
                console.log('creating...');
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                console.log('account created!');
                this.loggedIn = true;
                this.hasAccount = true;
                console.log('Current user', auth.currentUser);
            }
            catch(err){
                console.error('Couldn\'t create account', err);
            }
        }
    }
}
</script>