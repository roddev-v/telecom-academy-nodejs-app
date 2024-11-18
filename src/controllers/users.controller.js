class UsersController {
  // {id: 1, name: 'User A', email: 'test@test.com'}
  /**
   * [
   * {id: 1, name: 'User A', email: 'test@test.com'},
   * {id: 2, name: 'User B', email: 'test1@test.com'},
   * {id: 3, name: 'User C', email: 'test2@test.com'},
   * {id: 4, name: 'User D', email: 'test3@test.com'},
   * {id: 5, name: 'User E', email: 'test4@test.com'},
   * {id: 6, name: 'User E', email: 'test4@test.com'}
   * ]
   *  */
  users = [];
  currentId = 1;

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find(function (user) {
      return user.id === id;
    });
  }

  create(user) {
    user.id = this.currentId;
    this.currentId += 1;
    this.users.push(user);
  }

  delete(id) {
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

module.exports = UsersController;