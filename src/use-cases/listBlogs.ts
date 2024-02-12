export default function makeListBlogs({ blogsDb }) {
  const listBlogs = async () => {
    console.log("use case running");
    const blogs = (await blogsDb).findAllBlogs();
    return blogs;
  };
  return listBlogs;
}
