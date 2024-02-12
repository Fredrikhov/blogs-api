export const makeBlogDb = async ({ getClient }) => {
  const findAllBlogs = async () => {
    const result = await getClient().collection("blogs").find({}).toArray();
    return result;
  };

  return { findAllBlogs };
};
