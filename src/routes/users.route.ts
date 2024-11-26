import { UsersController } from "../controllers/users.controller";
import express from "express";

export class UserRoute {
  usersController: UsersController;

  constructor(app: express.Express) {
    this.usersController = new UsersController();
    this.initRoutes(app);
  }

  initRoutes(app: express.Express): void {
    app.get("/users", async (_, res) => {
      const users = await this.usersController.getAll();
      console.log("Users from UsersRoute", users);
      res.json(users);
    });

    app.get("/users/:id", async (req, res) => {
      const userId = parseInt(req.params.id);
      const user = await this.usersController.get(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      await this.usersController.create(user);
      res.json(user);
    });

    app.delete("/users/:id", async (req, res) => {
      const userId = parseInt(req.params.id);
      const deletedUserId = await this.usersController.delete(userId);
      if (deletedUserId) {
        res.send({ id: userId });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  }
}
