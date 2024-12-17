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