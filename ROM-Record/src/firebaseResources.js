   // Import the functions you need from the SDKs you need
   import { initializeApp } from 'firebase/app'
   import { getFirestore } from 'firebase/firestore'
   import { getAuth } from 'firebase/auth'
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDEmsoLI4Tsj4olq5QschWXnBiNOsHhKnU",
      authDomain: "rom-record-710f5.firebaseapp.com",
      projectId: "rom-record-710f5",
      storageBucket: "rom-record-710f5.appspot.com",
      messagingSenderId: "194611905302",
      appId: "1:194611905302:web:37af793224e5b320f10637"
    };

   // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //make auth & firebase references
    export const auth = getAuth(app);
    export const db = getFirestore(app);
    // Firebase storage configurations
    export const storage = firebase.storage();