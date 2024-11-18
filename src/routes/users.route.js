const UsersController = require("../controllers/users.controller");
class UsersRoute {
  usersController;

  constructor(app) {
    this.usersController = new UsersController();
    this.initRoutes(app);
  }

  initRoutes(app) {
    app.get("/users", (req, res) => {
      const users = this.usersController.getAll();
      res.json(users);
    });

    app.get("/users/:id", (req, res) => {
      const userId = parseInt(req.params.id);
      const user = this.usersController.get(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });

    app.post("/users", (req, res) => {
      const user = req.body;
      this.usersController.create(user);
      res.json(user);
    });

    app.delete("/users/:id", (req, res) => {
      const userId = parseInt(req.params.id);
      const deletedUserId = this.usersController.delete(userId);
      if (deletedUserId) {
        res.send({ id: userId });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  }
}

module.exports = UsersRoute;
