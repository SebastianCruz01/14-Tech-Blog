const Sequelize = require('sequelize'); // Import the Sequelize constructor from the library

require('dotenv').config(); // Import the dotenv package

let sequelize; // Create connection to our database, pass in your MySQL information for username and password

if (process.env.JAWSDB_URL) { 
    sequelize = new Sequelize(process.env.JAWSDB_URL); 
    } else {
    sequelize = new Sequelize( // Create connection to our database, pass in your MySQL information for username and password
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
        }
    );
}

module.exports = sequelize; // Export the connection