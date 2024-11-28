import * as admin from "firebase-admin";

type Post = {
  content: string;
  likesNumber: number;
};

class PostsController {
  db = admin.firestore();

  getAll() {}

  async create(post: Post) {
    await this.db.collection("posts").add(post);
  }
}

export { PostsController };
