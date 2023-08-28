<!-- Login/Logout page-->

<script>
    import { ref } from "vue";
    let input = ref("");

    import { auth } from '../firebaseResources';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { fetchSignInMethodsForEmail, signOut } from 'firebase/auth';
    import { useAuthStore } from '../stores/authStore';

    export default{
        data(){
            return{
                user: {
                    name: null,
                    email: null,
                    password: null,
                },
                loggedIn: null,
            }
        },
        mounted(){
                auth.onAuthStateChanged((user) =>{
                    if(user){
                        useAuthStore().setUser(user.email);
                    }
                    else{
                        useAuthStore().setUser(null);
                    }
                })
            },
        methods:{
            async login(){
                try{
                    this.notFound = false;
                    this.invalidPswd = false;
                    console.log('logging in...');
                    await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
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
    <div class="auth">
        <template v-if="!loggedIn">
            <title>Login</title>

                <h2>Login</h2>
                <input type="text" v-model="user.email" placeholder="Email"/>
                <input type="password" v-model="user.password" placeholder="Password"/>
                <button @click="login()">Log in</button>
                <br>
                <br>
                <h3>Don't have an account? Click this button to sign up!</h3>
                <RouterLink to="/Signup"><button>Sign Up</button></RouterLink>
        </template>

        <template v-if="loggedIn">
            <title>Sign out</title>
                <RouterLink to="/Login"><button @click="logout()">Sign Out</button></RouterLink>
        </template>
    </div>
</template>

<style scoped>
input {
    position: center;
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

h2 {
    text-align: center;
}
button {
    display: flex;
    justify-content: center;
}
</style>