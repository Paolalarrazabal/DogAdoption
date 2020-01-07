// Dependencies

const Sequelize = require("sequelize");

// db references our connection to the DB. 

const db = require("../config/connection.js")

const dogs = db.define("dogs", {
    name: {
    type: Sequelize.STRING
    },
    breed: {
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING 
    },
    age: {
    type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    }
});

// Syncs with DB
dogs.sync();

module.exports = dogs; 
