// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const db = new Sequelize("dogs", "root", "TT11lala:*", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
    });
    
    // Exports the connection for other files to use
    module.exports = db;

    db.authenticate()
    .then(() => console.log('Database connected..'))
    .catch(err => console.log('ERROR: ' + err))