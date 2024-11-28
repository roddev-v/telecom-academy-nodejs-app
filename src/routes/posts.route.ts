import express from "express";
import { PostsController } from "../controllers/posts.controller";

export class PostsRoute {
  postsController: PostsController;

  constructor(app: express.Express) {
    this.postsController = new PostsController();
    this.initRoutes(app);
  }

  initRoutes(app: express.Express): void {
    app.get("/posts", (req, res) => {});

    app.post("/posts", async (req, res) => {
      const post = req.body;
      await this.postsController.create(post);
      res.json(post);
    });
  }
}
