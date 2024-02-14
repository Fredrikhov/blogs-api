import express, { Express } from "express";
import expressCallback from "./middleware/expressCallback";
import { makeDbConnection, blogsDb } from "./data-access";
import { getBlogs } from "./controllers";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// routes
app.get("/", expressCallback(getBlogs));

const start = async () => {
  await makeDbConnection()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is runnning at -> http://localhost:${port}`);
      });
    })
    .catch(() => {
      console.log("Cant establish DB connection");
    });
};
start();
