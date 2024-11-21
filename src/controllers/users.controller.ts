type User = {
  id: number;
  name: string;
  email: string;
};

export class UsersController {
  users: User[] = [];
  currentId = 1;

  getAll(): User[] {
    return this.users;
  }

  get(id: number): User | undefined {
    return this.users.find(function (user) {
      return user.id === id;
    });
  }

  create(user: User): void {
    user.id = this.currentId;
    this.currentId += 1;
    this.users.push(user);
  }

  delete(id: number): number | undefined {
    const index = this.users.findIndex(function (user) {
      return user.id === id;
    });
    if (index < 0) {
      return;
    }
    this.users.splice(index, 1);
    return id;
  }
}