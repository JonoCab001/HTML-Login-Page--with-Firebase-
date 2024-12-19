 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
 
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

  // Initialize Variables
  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFirstName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLastName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })