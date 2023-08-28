<!-- Signup page, should be redirected from login later -->

<script>
    import { ref } from "vue";
    let input = ref("");

    // Fadak's code, implements firebase auth
    import { auth } from '../firebaseResources';
    import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
    import { useAuthStore } from "../stores/authStore";

    export default{
        data(){
            return{
                //loggedIn: false,
                user: {
                    email: null,
                    password: null,
                    name: null,
                },
                authStore: useAuthStore(),
            }
        },
        mounted(){
                auth.onAuthStateChanged((user) =>{
                    if(user){
                        this.authStore.setUser(user.email);
                    }
                    else{
                        this.authStore.setUser(null);
                    }
                })
            },
        methods:{
            async createAccount(){
                try{
                    console.log('creating...');
                    await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
                    console.log('account created!');
                    this.authStore.setUser(this.user);
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

<template>
    <div class="Signup">
        <title>Signup</title>
        <header>Create an account!</header>

        <div class="wrapper">
            <input type="text" v-model="user.name" placeholder="Username"/>
            <input type="text" v-model="user.email" placeholder="Email"/>
            <input type="password" v-model="user.password" placeholder="Password"/>
            <RouterLink to="/Login"><button @click="createAccount()">Create Account</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>
input {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 1px 45px;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
header {
    text-align: center;
}
</style>