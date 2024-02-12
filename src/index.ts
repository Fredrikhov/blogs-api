import express, { Express, response } from "express";
import expressCallback from "./expressCallback";
import { makeDbConnection, blogsDb } from "./data-access";
import { listBlogs } from "./use-cases";
import { getBlogs } from "./controllers";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.get("/", expressCallback(getBlogs));

const start = async () => {
  await makeDbConnection()
    .then(() => {
      console.log("Promise resolved, starting service");
      app.listen(port, () => {
        console.log(`Server is runnning at -> http://localhost:${port}`);
      });
    })
    .catch(() => {
      console.log("Cant establish DB connecting || server");
    });
};
start();
