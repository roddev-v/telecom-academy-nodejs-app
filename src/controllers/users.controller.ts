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

  async getAll(): Promise<User[]> {
    const users = await executeQuery("SELECT * FROM users");
    console.log('Users from UserController', users);
    return [];
  }

  get(id: number): User | undefined {
    return;
  }

  create(user: User): void {}

  delete(id: number): number | undefined {
    return;
  }
}
