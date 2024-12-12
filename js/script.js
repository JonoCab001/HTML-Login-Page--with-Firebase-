 
 
 /* Not Working */
 /*
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyA-Pb4QGKYAF_6tZ47Qf9gG5Kpx0d2bbWg",
    authDomain: "login-page-with-firebase-a094b.firebaseapp.com",
    projectId: "login-page-with-firebase-a094b",
    storageBucket: "login-page-with-firebase-a094b.firebasestorage.app",
    messagingSenderId: "131986400336",
    appId: "1:131986400336:web:bb31923cb4fc53c5a4dd55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Variables
  const auth = firebaseConfig.auth();
  const database = firebaseConfig.database();

  // Register function
  function register() {
    // Get all input fields
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    // Validate all input fields
    if (validateEmail(email) == false || validatePassword(password) == false) {
        alert('Email or Password is invalid');
        return;  // Don't continue running the code
    }
    if (validateField(username) == false) {
        alert('Username invalid');
        return;
    }

    // Move on with auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare a new user
        var user = auth.currentUser;

        // Add user to Firebase
        var database_ref  = database.ref();

        // Create user data
        var user_data = {
            username: username,
            email: email,
            password: password,
            last_login: Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data);

        alert('User has been created successfully');
    })
    .catch(function(error) {
        // Firebase will use this to catch any errors
        var error_code = error.code;
        var error_message = error.message;

        alert(error_message)
    })
}

function validateEmail(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if (expression.test(email) == true) {
        // if email valid
        return true;
    }
    else {
        // if email not valid
        return false;
    }
}

function validatePassword(password) {
    // Firebase can only accept length greater than 6
    if (password < 6) {
        return false;
    }
    else {
        return true;
    }
}

function validateField(field) {
    if (field == null) {
        return false;
    }

    if (field.length <= 0) {
        return false;
    }
    else {
        return true;
    }
}
*/