// This file is the main controller file that will be used to route all requests to the appropriate controller files

const router = require('express').Router();            // This is used to call the router module
const apiRoutes = require('./api');                    // This is used to call the api-routes.js file
const homeRoutes = require('./home-routes.js');             // This is used to call the home-routes.js file
const dashboardRoutes = require('./dashboard-routes.js');   // This is used to call the dashboard-routes.js file

router.use('/api', apiRoutes);                          // This is used to route all requests to the api-routes.js file
router.use('/', homeRoutes);                            // This is used to route all requests to the home-routes.js file                 
router.use('/dashboard', dashboardRoutes);              // This is used to route all requests to the dashboard-routes.js file

router.use((req, res) => {                              // This is used to route all requests to the 404 page
    res.status(404).end(); 
    }
);

module.exports = router;                                 // This is used to export the router module