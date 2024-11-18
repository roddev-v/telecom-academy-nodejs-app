const UsersController = require("../controllers/users.controller");
class UsersRoute {
  constructor(app) {
    this.initRoutes(app);
    this.usersController = new UsersController();
  }

  initRoutes(app) {
    app.get("/users", function (req, res) {
      res.send("Hello world!");
    });

    app.post("/users", function (req, res) {
      res.send("Hello world - POST!");
    });
  }
}

module.exports = UsersRoute;
