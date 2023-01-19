// This file is used to check if the user is logged in or not
/
const withAuth = (req, res, next) => {  // This function is called when the user tries to access a page that requires authentication
    if (!req.session.user_id) {        // If the user is not logged in
        res.redirect('/login');       // Redirect the user to the login page
    } else {                         // If the user is logged in
        next();                    // Call the next function
    }
    }; 

module.exports = withAuth;       // Exports the withAuth function