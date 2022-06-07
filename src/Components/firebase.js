import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD2Mm5bNQFThnTU0GxPGQXP6ZPDr2OPhTg",
    authDomain: "wineneocityv9.firebaseapp.com",
    projectId: "wineneocityv9",
    storageBucket: "wineneocityv9.appspot.com",
    messagingSenderId: "378587396799",
    appId: "1:378587396799:web:974cea30d608651c6b240a"
  }

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  {auth};
//signup

export function signup(auth, email,password){
    return createUserWithEmailAndPassword(auth, email,password).then((userCredential) => {
        // Signed in 
        console.log(userCredential.user)
        console.log('thanh cong')
        // ...
      })
      .catch((error) => {
        console.log(error.message)
        console.log('bug')
        // ..
      });
};

export function login(auth, email,password){
    return signInWithEmailAndPassword(auth, email,password).then((userCredential) => {
        // Signed in 
        console.log(userCredential.user)
        console.log('thanh cong')
        // ...
      })
      .catch((error) => {
        console.log(error.message)
        console.log('bug')
        // ..
      });
}

