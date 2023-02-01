const express = require('express');                                         // This is used to call the express module
const sequelize = require('./config/connection');                           // This is used to call the sequelize connection
const path = require('path');                                               // This is used to call the path module
const routes = require('./controllers');                                    // This is used to call the routes
const exphndbrs = require('express-handlebars');                            // This is used to call the handlebars engine
const session = require('express-session');                                 // This is used to store the session in the database
const sequelizeStore = require('connect-session-sequelize')(session.Store); // This is used to store the session in the database
const helpers = require('./utils/helpers');                                 // This is used to call the helper functions

require('dotenv').config();                                                 // This is used to read the .env file

const app = express();                                                     // This is used to call the express module
const PORT = process.env.PORT || 3001;                                     // This is used to set the port

const sess = {                                                             // This is used to set the session
    secret: process.env.SECRET,                                            // This is used to set the secret
    cookie: {maxAge: 3600000},                                             // This is used to set the cookie
    resave: false,                                                         // This is used to set the resave
    saveUninitialized: true,                                               // This is used to set the saveUninitialized
    store: new sequelizeStore({                                            // This is used to set the store
        db: sequelize                                                      // This is used to set the database
    })
};

const hbs = exphndbrs.create({helpers});                            // This is used to set the handlebars engine
app.engine('handlebars', hbs.engine);                               // This is used to set the handlebars engine
app.set('view engine', 'handlebars');                               // This is used to set the handlebars engine

app.use(express.json());                                            // This is used to set the express.json
app.use(express.urlencoded({extended: true}));                      // This is used to set the express.urlencoded
app.use(express.static(path.join(__dirname, 'public')));            // This is used to set the public folder

app.use(session(sess));                                             // This is used to set the session

app.use(routes);                                                    // This is used to set the routes

sequelize.sync({force: false}).then(() => {                         // This is used to sync the database
    app.listen(PORT, () => console.log('Now listening'));           // This is used to start the server
});
