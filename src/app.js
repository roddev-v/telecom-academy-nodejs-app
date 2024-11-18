const express = require("express");
const bodyParser = require("body-parser");

const constants = require('./utils/constants');

// Routes imports
const UsersRoute = require("./routes/users.route");

const app = express();

app.use(bodyParser.json());

new UsersRoute(app);

app.listen(constants.PORT, function () {
  console.log("Server is running on port: " + constants.PORT);
});
