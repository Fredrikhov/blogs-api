import { listBlogs } from "../use-cases";
import makeGetBlogs from "./getBlogs";

const getBlogs = makeGetBlogs({
  listBlogs,
});

export { getBlogs };
