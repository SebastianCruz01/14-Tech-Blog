async function logout() {                                                    // This function is called when the user clicks the "Logout" button on the dashboard page
    const response = await fetch('/api/users/logout', {                     // Sends a POST request to the /api/users/logout route
        method: 'POST',                                                    // Specifies the method of the request
        headers: { 'Content-Type': 'application/json' }                  // Specifies the content type of the request
    }); 

    if (response.ok) {                                                   // If the response is ok, redirect to the homepage
        document.location.replace('/');                                  // Redirects the user to the homepage
    } else {                                                            // If the response is not ok, alert the user with the error message
        alert(response.statusText);                                     // Alerts the user with the error message
    }
}

document.querySelector('#logout').addEventListener('click', logout);    // Adds an event listener to the "Logout" button on the dashboard page