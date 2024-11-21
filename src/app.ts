import express from "express";
import * as bodyParser from "body-parser";
import { PORT } from "./utils/constants";
import { UserRoute } from "./routes/users.route";

const app = express();

app.use(bodyParser.json());

new UserRoute(app);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
