const express = require("express");
const bodyParser = require("body-parser");

// Routes imports
const UsersRoute = require("./routes/users.route");

const app = express();

app.use(bodyParser.json());

new UsersRoute(app);

const PORT = 3000;
app.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});
