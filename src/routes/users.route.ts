import { UsersController } from "../controllers/users.controller";
import express from "express";
import { UserModel } from "../models/user.model";
import { validate } from "class-validator";
import { LocationModel } from "../models/location.model";

export class UserRoute {
  usersController: UsersController;

  constructor(app: express.Express) {
    this.usersController = new UsersController();
    this.initRoutes(app);
  }

  initRoutes(app: express.Express): void {
    app.get("/users", async (req, res) => {

      // validare query parameters care pot avea o serie de valori limitate
      if(req.query.sort !== 'ASC' && req.query.sort !== 'DESC') {
        res.status(400).json({message: 'Invalid user id'});
        return;
      }

      const users = await this.usersController.getAll();
      console.log("Users from UsersRoute", users);
      res.json(users);
    });

    app.get("/users/:id", async (req, res) => {
      const userId = parseInt(req.params.id);

      // validare parametru numeric
      if(isNaN(userId)) {
        res.status(400).json({message: 'Invalid user id'});
        return;
      }

      const user = await this.usersController.get(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });

    app.post("/users", async (req, res) => {
      const user = req.body; // plain user object
      const typedUser = new UserModel(req.body); // typed user object
      const errors = await validate(typedUser);
      
      if(errors.length > 0) {
        res.status(400).json({errors: errors});
        return;
      }

      await this.usersController.create(user);
      res.json(user);
    });

    app.delete("/users/:id", async (req, res) => {
      const userId = parseInt(req.params.id);

      // validare parametru numeric
      if(isNaN(userId)) {
        res.status(400).json({message: 'Invalid user id'});
        return;
      }

      const deletedUserId = await this.usersController.delete(userId);
      if (deletedUserId) {
        res.send({ id: userId });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    });
  }
}
