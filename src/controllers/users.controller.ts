import mysql from "mysql2";
import { DB_CONFIG } from "../db/config";
import { executeQuery } from "../utils/db-helper";

type User = {
  id: number;
  name: string;
  email: string;
};

export class UsersController {
  client: mysql.Connection;

  constructor() {
    this.client = mysql.createConnection(DB_CONFIG);
    this.client.connect();
  }

  async getAll() {
    const users = await executeQuery("SELECT * FROM users");
    return users;
  }

  async get(id: number): Promise<User | undefined> {
    const users = await executeQuery("SELECT * FROM users WHERE id = ?", [id]);
    return users[0];
  }

  async create(user: User): Promise<void> {
    await executeQuery("INSERT INTO users(name, email) VALUES(?,?)", [
      user.name,
      user.email,
    ]);
  }

  async delete(id: number): Promise<number | undefined> {
    const result = await executeQuery("DELETE FROM users WHERE id = ?", [id]) as {affectedRows: number} ;
    if (result.affectedRows === 0) {
      return;
    } else {
      return id;
    }
  }
}
