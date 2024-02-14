export default function makeListBlogs({ blogsDb }) {
  const listBlogs = async () => {
    const blogs = (await blogsDb).findAllBlogs();
    return blogs;
  };
  return listBlogs;
}
