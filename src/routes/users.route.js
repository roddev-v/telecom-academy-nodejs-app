class UsersRoute {
  constructor(app) {
    this.initRoutes(app);
  }

  initRoutes(app) {
    app.get("/", function (req, res) {
      res.send("Hello world!");
    });
  }
}

module.exports = UsersRoute;
