// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnY_zRQk5Pmo8UYP4TSiMLYVFE-t7KyLg",
  authDomain: "login-page-with-firebase-v2.firebaseapp.com",
  projectId: "login-page-with-firebase-v2",
  storageBucket: "login-page-with-firebase-v2.firebasestorage.app",
  messagingSenderId: "701309876761",
  appId: "1:701309876761:web:ae53bc0c25f2b140138888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp = document.getElementById('submitRegister');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            username: username,
            email: email,
            password: password
        };
    })
})