<<<<<<< Updated upstream
// Import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
=======
const Sequelize = require("sequelize")

    require("dontenv").config()

    const sequelize = process.env.JAWSDB_URL
        ? new Sequelize(process.env.JAWSDB_URL)
        : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        })

        sequelize
        .authenticate()
        .then(() => console.log('Successfully connected to database...'))
        .catch(err => console.log('Error connecting to the database... ${err}'))

        module.exports = sequelize
>>>>>>> Stashed changes
