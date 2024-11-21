import mysql from "mysql2";
import { DB_CONFIG } from "../db/config";

function executeQuery(sqlQuery: string) {
  return new Promise((resolve, reject) => {
    console.log("Executing query ", sqlQuery);
    const client = mysql.createConnection(DB_CONFIG);
    client.query(sqlQuery, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      console.log("Resolving data ", sqlQuery);
      resolve(data);
      client.end();
    });
  });
}

export { executeQuery };
