const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path"); 

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send ("INDEX"));

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
//require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log(`App listening on PORT ${PORT}`);
});