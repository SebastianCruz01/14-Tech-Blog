async function signupFormHandler(event) {                                     // This function is called when the user clicks the "Sign Up" button on the login page
    event.preventDefault();                                                   // Prevents the default action of the event from happening
    const username = document.querySelector('#username-signup').value.trim(); // Gets the value of the input with the id "username-signup"
    const password = document.querySelector('#password-signup').value.trim(); // Gets the value of the input with the id "password-signup"
    if (username && email && password) {                                     // If the username, email, and password are not empty
        const response = await fetch('/api/users', {                         // Sends a POST request to the /api/users route
            method: 'post',                                                 // Specifies the method of the request
            body: JSON.stringify({                                         // Converts the username, email, and password to JSON
                username, 
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }               // Specifies the content type of the request
        });
        if (response.ok) {                                                // If the response is ok, redirect to the dashboard page
            document.location.replace('/dashboard');                     // Redirects the user to the dashboard page
        } else {                                                        // If the response is not ok, alert the user with the error message
            alert(response.statusText);                                // Alerts the user with the error message
        } 
    }
}

async function loginFormHandler(event) {                                     // This function is called when the user clicks the "Log In" button on the login page
    event.preventDefault();                                                  // Prevents the default action of the event from happening
    const username = document.querySelector('#username-login').value.trim(); // Gets the value of the input with the id "username-login"
    const password = document.querySelector('#password-login').value.trim(); // Gets the value of the input with the id "password-login"
    if (username && password) {                                              // If the username and password are not empty
        const response = await fetch('/api/users/login', {                  // Sends a POST request to the /api/users/login route
            method: 'post',                                                 // Specifies the method of the request
            body: JSON.stringify({                                          // Converts the username and password to JSON
                username, 
                password
            }),
            headers: { 'Content-Type': 'application/json' }                 // Specifies the content type of the request
        });
        if (response.ok) {                                              // If the response is ok, redirect to the dashboard page
            document.location.replace('/dashboard');                    // Redirects the user to the dashboard page
        } else {                                                        // If the response is not ok, alert the user with the error message
            alert(response.statusText);                                 // Alerts the user with the error message
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);    // Adds an event listener to the "Log In" button on the login page
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);  // Adds an event listener to the "Sign Up" button on the login page