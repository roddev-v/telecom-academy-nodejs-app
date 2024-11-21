import { UsersController } from "../controllers/users.controller";
import express from "express";

export class UserRoute {
  usersController: UsersController;

  constructor(app: express.Express) {
    this.usersController = new UsersController();
    this.initRoutes(app);
  }

  initRoutes(app: express.Express): void {
    app.get("/users", (_, res) => {
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