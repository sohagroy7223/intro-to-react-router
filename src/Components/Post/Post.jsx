import React from "react";
import { useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <p>all posts is here {posts.length}</p>
    </div>
  );
};

export default Posts;
