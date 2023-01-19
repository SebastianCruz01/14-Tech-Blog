async function newFormHandler(event) {                                      // This function is called when the user clicks the "Add Post" button on the dashboard page
  event.preventDefault();                                                   // Prevents the default action of the event from happening

  const title = document.querySelector('input[name="post-title"]').value;   // Gets the value of the input with the name "post-title"
  const post_url = document.querySelector('input[name="post-url"]').value;  // Gets the value of the input with the name "post-url"

  const response = await fetch(`/api/posts`, {                              // Sends a POST request to the /api/posts route
    method: 'POST',                                                         // Specifies the method of the request
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'                                   // Specifies the content type of the request
    }
  });

  if (response.ok) {                                                       // If the response is ok, redirect to the dashboard page
    document.location.replace('/dashboard');                               // Redirects the user to the dashboard page
  } else {                                                                 // If the response is not ok, alert the user with the error message
    alert(response.statusText);                                            // Alerts the user with the error message
  }
}   