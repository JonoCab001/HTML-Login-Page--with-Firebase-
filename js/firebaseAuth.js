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

function showMessage(message, divId) {
    var messageDiv = document.getElementById(divId);
    
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;

    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        showMessage('Account Created Successfully!', 'registerMessage');

        const docRef = doc(db, "users", user.uid);

        setDoc(docRef, userData)
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("An error occurred while writing document", error);
        });
    })
    .catch((error) => {
        const errorCode = error.code;

        if (errorCode == 'auth/email-already-in-use') {
            showMessage('Email already in use!', 'registerMessage');
        }
        else {
            showMessage('Unable to create user, please try again later', 'registerMessage');
        }
    })
});

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        showMessage('Login successful :)', 'signInMessage');

        const user = userCredential.user;

        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'homepage.html';
    })
    .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/invalid-credential') {
            showMessage('Invalid email or password', 'signInMessage');
        }
        else {
            showMessage("Account doesn't exist", 'signInMessage');
        }
    })
})
