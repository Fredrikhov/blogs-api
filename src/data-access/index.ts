import { MongoClient } from "mongodb";
import { makeBlogDb } from "./blogsDb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.mongodb);
const dbName = "blogDB";
const makeDbConnection = async () => {
  try {
    await mongoClient.connect();
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
};

const getClient = () => {
  return mongoClient.db(dbName);
};

const blogsDb = makeBlogDb({ getClient });

export { makeDbConnection, blogsDb };
