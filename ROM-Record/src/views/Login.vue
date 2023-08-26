<!-- Signup page-->

<script>
    import { ref } from "vue";
    let input = ref("");

    import { auth } from '../firebaseResources';
    import { signInWithEmailAndPassword } from 'firebase/auth';

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
            },
        }
    }
</script>

<template>
    <div class="Login">
        <template v-if="!loggedIn">
            <title>Login</title>

            <div class="wrapper">
                <input type="text" v-model="email" placeholder="Email"/>
                <input type="password" v-model="pswd" placeholder="Password"/>
                <RouterLink to="/Login"><button @click="login()">Log in</button></RouterLink>
                <RouterLink to="/Signup"><button>Sign Up</button></RouterLink>
            </div>
        </template>

        <template v-if="loggedIn">
            <title>Sign out</title>
            <div class="wrapper">
                <RouterLink to="/Login"><button @click="logout()">Sign Out</button></RouterLink>
            </div>
        </template>
    </div>
</template>

<style scoped>
input {
    display: block;
    width: 350px;
    margin: 20px auto;
    padding: 1px 45px;
    background: white url("assets/search-icon.svg") no-repeat 15px center;
    background-size: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
</style>