<template>
    <div class="auth">
        <template v-if="!loggedIn">
            Display Name: <input id="name" type="text" v-model.trim="name"/>
            <br>
            Email: <input id="email" type="text" v-model.trim="email"/>
            <br>
            Password: <input id="pswd" type="password" v-model.trim="pswd"/>
            <br>
            <button @click="createAccount()">Create Account</button>
        </template>
        <template v-if="loggedIn">
            <RouterLink to="/signout"><button>Log Out</button></RouterLink>
        </template>
    </div>
</template>


<script>
import { auth } from '../../firebaseResources';
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default{
    data(){
        return{
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
                await createUserWithEmailAndPassword(auth, this.email, this.pswd);
                console.log('account created!');
                this.loggedIn = true;
                //this.hasAccount = true;
                console.log('Current user', auth.currentUser);
            }
            catch(err){
                console.error('Couldn\'t create account', err);
            }
        }
    }
}
</script>