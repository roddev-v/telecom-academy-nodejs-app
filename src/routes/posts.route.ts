import express from "express";
import { PostsController } from "../controllers/posts.controller";

export class PostsRoute {
  postsController: PostsController;

  constructor(app: express.Express) {
    this.postsController = new PostsController();
    this.initRoutes(app);
  }

  initRoutes(app: express.Express): void {
    app.get("/posts", async (req, res) => {
      const posts = await this.postsController.getAll();
      res.json(posts);
    });

    app.get("/posts/:id", async (req, res) => {
      const userId = req.params.id;
      const user = await this.postsController.get(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    });

    app.post("/posts", async (req, res) => {
      const post = req.body;
      await this.postsController.create(post);
      res.json(post);
    });

    app.delete("/posts/:id", async (req, res) => {
        const postId = req.params.id;
        await this.postsController.delete(postId);
        res.send({ id: postId });
      });
  }
}
