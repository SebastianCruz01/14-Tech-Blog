async function deleteFromHandler(event){                                    // This function is called when the user clicks the "Delete Post" button on the post page
event.preventDefault();                                                     // Prevents the default action of the event from happening

const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]; // Gets the post id from the url

const response = await fetch(`/api/posts/${post_id}`, {                   // Sends a DELETE request to the /api/posts/:id route
    method: 'DELETE'                                                      // Specifies the method of the request
});

if (response.ok) {                                                       // If the response is ok, redirect to the dashboard page
    document.location.replace('/dashboard');                             // Redirects the user to the dashboard page
}   else {                                                               // If the response is not ok, alert the user with the error message
    alert(response.statusText);                                         // Alerts the user with the error message
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler); // Adds an event listener to the "Delete Post" button on the post page