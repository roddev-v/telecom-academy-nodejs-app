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

    app.get("/users/:id", function (req, res) {
      const userId = parseInt(req.params.id);
      res.json({ id: userId });
    });

    app.post("/users", function (req, res) {
      const user = req.body;
      res.json({ user: user });
    });

    app.delete("/users/:id", function (req, res) {
      const userId = parseInt(req.params.id);
      res.send({ id: userId });
    });
  }
}

module.exports = UsersRoute;
