import express from "express";
import * as bodyParser from "body-parser";
import { PORT } from "./utils/constants";
import { UserRoute } from "./routes/users.route";
import * as firebaseConfig from './db/firebase-config.json';
import * as admin from 'firebase-admin'

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount)
});

app.use(bodyParser.json());

new UserRoute(app);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
