async function commentFormHandler(event){                                 // This function is called when the user clicks the "Add Comment" button on the post page
    event.preventDefault();                                               // Prevents the default action of the event from happening

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();  // Gets the value of the textarea with the name "comment-body"

    const post_id = window.location.toString().split('/')[                  // Gets the post id from the url
        window.location.toString().split('/').length - 1                    // Gets the last element of the array
    ];

    if (comment_text) {                                                    // If the comment text is not empty
        const response = await fetch('/api/comments', {                    // Sends a POST request to the /api/comments route
            method: 'POST', 
            body: JSON.stringify({                                         // Converts the comment text and post id to JSON
                post_id, 
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {                                                // If the response is ok, reload the page
            document.location.reload();                                   // Reloads the page
        } else {                                                          // If the response is not ok, alert the user with the error message
            alert(response.statusText);                                   // Alerts the user with the error message
        }
    }
}