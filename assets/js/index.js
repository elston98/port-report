firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        window.location = "portreport.html";
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {

            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            })


    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});


function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

function logout() {
    firebase.auth().signOut();
    window.location = "master.html";
    console.log("Signed out");

}


function func() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.

            window.location = "portreport.html";
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {

                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })


        } else {
            // No user is signed in.

            window.location = "master.html";

        }
    });

}

function check() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.

            // window.alert("Welcome " + user.email);
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
                .then(function() {

                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                })


        } else {
            // No user is signed in.

            window.location = "master.html";

        }
    });

}