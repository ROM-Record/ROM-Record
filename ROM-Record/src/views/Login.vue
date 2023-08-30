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
                    email: null,
                    password: null,
                },
                //loggedIn: null,
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
            async login(){
                try{
                    this.notFound = false;
                    this.invalidPswd = false;
                    console.log('logging in...');
                    await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
                    this.authStore.setUser(this.user);
                    console.log('successfully logged in!')
                    this.$router.push('/dashboard');
                    //this.loggedIn = true;
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
                        this.authStore.signOut();
                        console.log('Successfully logged out!')
                       // this.loggedIn = false;
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
        <template v-if="!authStore.user">
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

        <template v-if="authStore.user">
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
    
  }

h2 {
    text-align: center;
}
button {
    display: flex;
    justify-content: center;
}
</style>