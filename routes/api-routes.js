// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const dogs = require("../models/dogs.js");

module.exports = function(app) {

    // Get all chirps
    app.get("/api/all", function(req, res) {
    
        // Finding all Chirps, and then returning them to the user as JSON.
        // Sequelize queries are asynchronous, which helps with perceived speed.
        // If we want something to be guaranteed to happen after the query, we'll use
        // the .then function
        dogs.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
        });
    
    });
}


