<template>
    <div class="auth">
        <template v-if="loggedIn">
            <!--button @click="logout()">Log Out</button>-->
            <RouterLink to="/login"><button @click="logout()">Sign Out</button></RouterLink>
        </template>
    </div>
</template>

<script>
import { auth } from '../../firebaseResources';
import { fetchSignInMethodsForEmail, signOut } from 'firebase/auth';

export default{
    data(){
        return{
            loggedIn: true,
        }
    },
    methods:{
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