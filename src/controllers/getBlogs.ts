const makeGetBlogs = ({ listBlogs }) => {
  const getBlogs = async (httpRequest) => {
    const getBlog = await listBlogs()
      .then((blog) => {
        return { statusCode: 200, body: blog };
      })
      .catch((e) => {
        return {
          statusCode: 400,
          body: {
            error: e.message,
          },
        };
      });
    return getBlog;
  };

  return getBlogs;
};

export default makeGetBlogs;
