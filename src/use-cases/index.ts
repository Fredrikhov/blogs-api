import { blogsDb } from "../data-access";
import makeListBlogs from "./listBlogs";

const listBlogs = makeListBlogs({ blogsDb });

export { listBlogs };
