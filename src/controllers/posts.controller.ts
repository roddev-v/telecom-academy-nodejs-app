import * as admin from "firebase-admin";

type Post = {
  content: string;
  likesNumber: number;
};

class PostsController {
  db = admin.firestore();

  async getAll() {
    const res = await this.db.collection("posts").get();
    return res.docs.map((item) => {
      return item.data();
    });
  }

  async get(id: string) {
    const response = await this.db.collection("posts").doc(id).get();
    return response.data();
  }

  async create(post: Post) {
    await this.db.collection("posts").add(post);
  }

  async delete(id: string) {
    await this.db.collection("posts").doc(id).delete();
  }
}

export { PostsController };
